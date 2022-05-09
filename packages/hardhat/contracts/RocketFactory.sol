// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "abdk-libraries-solidity/ABDKMath64x64.sol";

contract RocketFactory is KeeperCompatibleInterface {
    Transaction[] transactionsList;
    using ABDKMath64x64 for int128;
    using SafeMath for uint256;
    using SafeMath for uint64;
    using SafeMath for uint24;
    using SafeMath for uint8;
    //mapping for

    struct Transaction {
        uint256 id;
        address owner;
        address receiver;
        uint256 deadline;
        address ERC20TokenAddress;
        uint256 amount;
        uint256 tip;
        bool pending;
    }

    //TODO fix this shit
    //sends the tip amount to the treasury address
    function claimTip (address IERC20address, address treasury, uint amount, uint tip) public returns (uint256 taxAmount){
        uint256 taxAmount = ABDKMath64x64.mulu(amount, tip);
        transferFrom(address(this), treasury, taxAmount);
        return taxAmount;
    }

    //creates a new transaction for later scheduling
    function createTransaction(
        address receiver,
        address ERC20TokenAddress,
        uint256 amount,
        uint256 deadline,
        uint256 tip
    ) public {
        // Check if they have the ERC20Token amount in their wallet
        uint256 dueBy = block.timestamp + deadline; //in seconds
        IERC20 token = IERC20(ERC20TokenAddress);
        require(
            token.allowance(msg.sender, address(this)) >= amount,
            "Not enough tokens to complete tx"
        );

        //Send that amount to the contract
        bool sent = token.transferFrom(msg.sender, address(this), amount);
        require(sent, "transfer fialed");

        Transaction memory newTransaction = Transaction(
            transactionsList.length,
            msg.sender,
            receiver,
            dueBy,
            ERC20TokenAddress,
            amount,
            tip,
            true
        );
        transactionsList.push(newTransaction);
    }

    //TODO
    // 1. send the money from the escrow account to the receiver
    // 2. (later) add a modifier that only allows approved liquidators to execute transaction
    //who can execute this transaction? only the liquidator bots
    function executeTransaction(uint256 id)
        public
        returns (Transaction memory)
    {
        //ensure that the transaction is not pending
        Transaction memory scheduledTx = getTransaction(id);
        require(scheduledTx.pending == true, "Already executed");
        // require( block.timestamp >= scheduledTx.deadline,"Not ready to be executed");

        //take the money from the lending pool and send it to the receiver
        //do this later

        //send the tip reward to the treasury
        address treasury = 0x54e51feF99fFcCDCE4a7391a7c81FB0087A376de;
        uint256 taxAmount = claimTip(scheduledTx.ERC20TokenAddress,treasury,scheduledTx.amount,scheduledTx.tip);
        uint256 actualAmount = scheduledTx.amount - taxAmount;

        //TODO ad logic that sends this to the tresury address


        // create a new struct and update the transactionsList
        Transaction memory newTransaction = Transaction(
            id,
            scheduledTx.owner,
            scheduledTx.receiver,
            scheduledTx.deadline,
            scheduledTx.ERC20TokenAddress,
            scheduledTx.amount,
            scheduledTx.tip,
            false
        );
        transactionsList[id] = newTransaction;
        return newTransaction;
    }

    //get the current transactions in the array
    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactionsList;
    }

    function getTransaction(uint256 id)
        public
        view
        returns (Transaction memory)
    {
        require(id <= transactionsList.length);
        return transactionsList[id];
    }

    // Called by ChainLink Keeper every block to see if condition is met
    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        // Get Array of all Pending Transactions
        Transaction[] memory allTxs = getAllTransactions();
        // Map thru all transaction to find where deadline < blocktime
        for (uint256 index = 0; index < allTxs.length; index++) {
            Transaction memory txn = allTxs[index];
            if (txn.deadline < block.timestamp) {
                upkeepNeeded = true;
            }
        }
    }

    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        // We highly recommend re-validating the upkeep in the performUpkeep function
        Transaction[] memory allTxs = getAllTransactions();
        // Map thru all transaction to find where deadline < blocktime
        for (uint256 index = 0; index < allTxs.length; index++) {
            Transaction memory txn = allTxs[index];
            if (txn.deadline < block.timestamp) {
                executeTransaction(txn.id);
            }
        }

        // We don't use the performData in this example. The performData is generated by the Keeper's call to your checkUpkeep function
    }


}

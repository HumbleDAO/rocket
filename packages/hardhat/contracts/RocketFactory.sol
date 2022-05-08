// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract RocketFactory {

    Transaction[] transactionsList;
    //mapping for

    struct  Transaction{
        uint id;
        address owner;
        address receiver;
        uint  deadline;
        address  ERC20TokenAddress;
        uint  amount;
        uint  tip;    
        bool pending;
    }

    //creates a new transaction for later scheduling
    function createTransaction(address receiver, address ERC20TokenAddress, uint amount, uint deadline, uint tip) public {
        // Check if they have the ERC20Token amount in their wallet
        IERC20 token = IERC20(ERC20TokenAddress);
        require(
            token.allowance(msg.sender, address(this)) >= amount,
            "Not enough tokens to complete tx"
            );
            
        //Send that amount to the contract
        bool sent = token.transferFrom(msg.sender, address(this), amount);
        require(sent, "transfer fialed");

        Transaction memory newTransaction = Transaction(transactionsList.length ,msg.sender, receiver, deadline, ERC20TokenAddress, amount, tip, true);
        transactionsList.push(newTransaction);
    
    }

    //TODO
    // 1. send the money from the escrow account to the receiver
    // 2. (later) add a modifier that only allows approved liquidators to execute transaction
    //who can execute this transaction? only the liquidator bots
    function executeTransaction(uint id) public returns (Transaction memory) {
        //ensure that the transaction is not pending
        Transaction memory scheduledTx = getTransaction(id);
        require(scheduledTx.pending == true, "Already executed");
        
        //take the money from the lending pool and send it to the receiver
        //do this later


        // create a new struct and update the transactionsList
        Transaction memory newTransaction = Transaction(id,scheduledTx.owner, scheduledTx.receiver, scheduledTx.deadline, scheduledTx.ERC20TokenAddress, scheduledTx.amount, scheduledTx.tip, false);
        transactionsList[id] = newTransaction;
        return newTransaction;


    }

    //get the current transactions in the array
    function getAllTransactions() public view returns (Transaction[] memory ) {
        return transactionsList;
    }

    function getTransaction(uint id) public view returns (Transaction memory) {
        require(id <= transactionsList.length);
        return transactionsList[id];
        
        
    }
}
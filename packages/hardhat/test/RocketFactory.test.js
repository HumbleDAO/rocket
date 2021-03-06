const { ethers } = require('hardhat')
const { use, expect } = require('chai')
const { solidity } = require('ethereum-waffle')

use(solidity)

describe('My Rocket Test', function () {
  let myContract

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000)
  })

  describe('RocketFactory', function () {
    it('Should deploy RocketFactory', async function () {
      const RocketFactory = await ethers.getContractFactory('RocketFactory')
      myContract = await RocketFactory.deploy()
      // console.log(myContract.address)
    })

    it('Should create a tx', async function () {
      const GoofyGoober = await ethers.getContractFactory('GoofyGoober')
      myToken = await GoofyGoober.deploy()
      address = myToken.address
      let result = await myContract.createTransaction(
        '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
        address,
        0,
        0,
        0
      )
      // console.log(result, myToken, 'Token')
    })

    it('Should get all transactions', async function () {
      let result = await myContract.getAllTransactions()
      // console.log(result)
    })

    it('Should get a specific transaction', async function () {
      let result = await myContract.getTransaction(0)
      // console.log('transaction', result)
    })

    it('Should have token balance', async function () {
      const [owner] = await ethers.getSigners()
      const ownerBalance = await myToken.balanceOf(owner.address)
      console.log('balance', ownerBalance)
    })

    it('Should execute a transaction and switch the pending flag to true', async function () {
      // const GoofyGoober = await ethers.getContractFactory('GoofyGoober')
      // myToken = await GoofyGoober.deploy()
      // address = myToken.address
      executedTransaction = await myContract.executeTransaction(0)
      // expect(executedTransaction[7].equal('false'))
      expectedTransaction = await myContract.getTransaction(0)
      // expect(expectedTransaction[7].equal('true'))
      // console.log(executedTransaction, expectedTransaction)

      const receiverBalance = await myToken.balanceOf(
        '0x976ea74026e726554db657fa54763abd0c3a0aa9'
      )
      console.log('receiverBalance', receiverBalance)
    })

    // describe('setPurpose()', function () {
    //   it('Should be able to set a new purpose', async function () {
    //     const newPurpose = 'Test Purpose'

    //     await myContract.setPurpose(newPurpose)
    //     expect(await myContract.purpose()).to.equal(newPurpose)
    //   })

    //   it('Should emit a SetPurpose event ', async function () {
    //     const [owner] = await ethers.getSigners()

    //     const newPurpose = 'Another Test Purpose'

    //     expect(await myContract.setPurpose(newPurpose))
    //       .to.emit(myContract, 'SetPurpose')
    //       .withArgs(owner.address, newPurpose)
    //   })
    // })
  })
})

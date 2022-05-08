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
      console.log(myContract.address)
    }) 
    
    it("Should create a tx", async function () {
      // const RocketFactory = await ethers.getContractFactory('RocketFactory')
      const GoofyGoober = await ethers.getContractFactory('GoofyGoober')
      myToken = await GoofyGoober.deploy()
      address = myToken.address
      console.log
      let result = await myContract.createTransaction("0x976EA74026E726554dB657fA54763abd0C3a0aa9",address,0,1652078273,0)
      console.log(result)
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

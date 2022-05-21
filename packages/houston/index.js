// Search for Scheduled Transactions that are available for execution

// Attempts to Execute a pending transaction that

// CONFIGURATIONS
require('dotenv').config()
const Web3 = require('web3')
const Provider = require('@truffle/hdwallet-provider')
const json = require('../nuxt-app/contracts/ABI/RocketFactory.json')
const tagJSON = require('../nuxt-app/contracts/ABI/GoofyGoober.json')
const addy = '0x923aC4A19DAE1b0875361312556E7469869b140b'
const ctag = '0xc69F4eF2138764A52e7dd7Ec2931d1CdD7B32d0f'
const alchemyKey = process.env.ALCHEMY_API
const provider = new Provider(
  process.env.PRIVATE_KEY,
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`
)
const web3 = new Web3(provider)
const Rocket = new web3.eth.Contract(json, addy)
const CTAG = new web3.eth.Contract(tagJSON, ctag)
let isExecuting = false
let isQuerying = false

//Functions
async function queryForTransactions() {
  isExecuting = true
  let totalTransactions = -1
  await Rocket.methods
    .getAllTransactions()
    .call({ from: process.env.ADDRESS }, async (error, result) => {
      pendingTransactions = result.filter((obj) => {
        return obj.pending == true
      })

      if (pendingTransactions.length != totalTransactions) {
        totalTransactions = pendingTransactions.length
        console.log(`${totalTransactions} are pending for execution`)
      } else {
        console.log('We are fully updated with all transactions')
      }

      if (pendingTransactions) {
        // let obj = pendingTransactions[0]
        // const blockNumber = await web3.eth.getBlockNumber()
        // const timestamp = await web3.eth.getBlock(blockNumber)
        // console.log(
        //   obj.deadline,
        //   timestamp.timestamp,
        //   obj.deadline < timestamp.timestamp
        // )
        // await Rocket.methods
        //   .executeTransaction(obj.id)
        //   .send({ from: process.env.ADDRESS }, function (error, result) {
        //     console.log(result)
        //     if (error) console.log(error)
        //   })

        // await Rocket.methods
        //   .executeAll()
        //   .send({ from: process.env.ADDRESS, gas: 500000 }, function (
        //     error,
        //     result
        //   ) {
        //     console.log(result)
        //     if (error) console.log(error)
        //   })

        isExecuting = false
      }
    })
}

async function createScheduledTransaction() {
  isQuerying = true
  // let appr = await CTAG.methods
  //   .approve(addy, 100)
  //   .send({ from: process.env.ADDRESS }, function (error, result) {
  //     console.log(result)
  //     if (error) console.log(error)
  //   })
  // console.log(appr)
  let res = await Rocket.methods
    .createTransaction(
      '0x54e51feF99fFcCDCE4a7391a7c81FB0087A376de',
      ctag, // Cipher Tags
      Math.floor(Math.random()) * 100,
      Math.floor(Math.random()) * 100,
      0
    )
    .send({ from: process.env.ADDRESS }, function (error, result) {
      console.log('Scheduled', result)
      if (error) console.log(error)
    })

  // let res = await Rocket.methods
  //   .createTransaction(
  //     '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
  //     '0xDe60452084676294786a99E4dF017c7d5Aad9681',
  //     0,
  //     1,
  //     0,
  //   )
  //   .send({ from: process.env.ADDRESS }, function (error, result) {
  //     console.log(result)
  //     if (error) console.log(error)
  //   })
  isQuerying = false
}

async function checkUpkeep() {
  let res = await Rocket.methods
    .checkUpkeep(1333)
    .call({ from: process.env.ADDRESS }, function (error, result) {
      console.log(result)
      if (error) console.log(error)
    })
}
createScheduledTransaction()

// BOT LOGIC
setInterval(function () {
  if (!isQuerying) {
    createScheduledTransaction()
  }
}, 10000)

setInterval(function () {
  if (!isExecuting) {
    queryForTransactions()
  }
  // checkUpkeep()
}, 3000)

// id: '1',
// owner: '0x4Ee949b24eDE8a2D5780f8a5038D940707Ef1070',
// receiver: '0x0000000000000000000000000000000000001010',
// deadline: '1652078273',
// ERC20TokenAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
// amount: '1',
// tip: '0',
// pending: true

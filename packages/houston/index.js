// Search for Scheduled Transactions that are available for execution

// Attempts to Execute a pending transaction that

// CONFIGURATIONS
require('dotenv').config()
const Web3 = require('web3')
const Provider = require('@truffle/hdwallet-provider')
const json = require('../nuxt-app/contracts/ABI/RocketFactory.json')
const tagJSON = require('../nuxt-app/contracts/ABI/GoofyGoober.json')
const addy = '0xA0d71F67052F3Eb41C6F706C6b4fAe00CE20D35b'
const ctag = '0xc69f4ef2138764a52e7dd7ec2931d1cdd7b32d0f'
const alchemyKey = process.env.ALCHEMY_API_KEY
const provider = new Provider(
  process.env.PRIVATE_KEY,
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`,
)
const web3 = new Web3(provider)
const Rocket = new web3.eth.Contract(json, addy)
const CTAG = new web3.eth.Contract(tagJSON, ctag)

//Functions
async function queryForTransactions() {
  let totalTransactions = -1
  await Rocket.methods
    .getAllTransactions()
    .call({ from: process.env.ADDRESS }, (error, result) => {
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
        pendingTransactions.map(async (obj) => {
          const blockNumber = await web3.eth.getBlockNumber()
          const timestamp = await web3.eth.getBlock(blockNumber)
          console.log(
            obj.deadline,
            timestamp.timestamp,
            obj.deadline < timestamp.timestamp,
          )
          await Rocket.methods
            .executeTransaction(obj.id)
            .send({ from: process.env.ADDRESS }, function (error, result) {
              console.log(result)
              if (error) console.log(error)
            })
        })
      }
    })
}

async function createScheduledTransaction() {
  let appr = await CTAG.methods
    .approve(addy, String(100 * 10 ** 18))
    .send({ from: process.env.ADDRESS }, function (error, result) {
      console.log(result)
      if (error) console.log(error)
    })
  console.log(appr)
  let res = await Rocket.methods
    .createTransaction(
      '0x54e51feF99fFcCDCE4a7391a7c81FB0087A376de',
      '0xc69f4ef2138764a52e7dd7ec2931d1cdd7b32d0f', // Cipher Tags
      10 * 10 ** 18,
      1,
      0,
    )
    .send({ from: process.env.ADDRESS }, function (error, result) {
      console.log(result)
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
}

async function checkUpkeep() {
  let res = await Rocket.methods
    .checkUpkeep(1333)
    .call({ from: process.env.ADDRESS }, function (error, result) {
      console.log(result)
      if (error) console.log(error)
    })
}

// BOT LOGIC
setInterval(function () {
  createScheduledTransaction()
  queryForTransactions()
  // checkUpkeep()
}, 2000)

// id: '1',
// owner: '0x4Ee949b24eDE8a2D5780f8a5038D940707Ef1070',
// receiver: '0x0000000000000000000000000000000000001010',
// deadline: '1652078273',
// ERC20TokenAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
// amount: '1',
// tip: '0',
// pending: true

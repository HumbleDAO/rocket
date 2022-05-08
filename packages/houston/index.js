// Search for Scheduled Transactions that are available for execution

// Attempts to Execute a pending transaction that

// CONFIGURATIONS
require('dotenv').config()
const Web3 = require('web3')
const Provider = require('@truffle/hdwallet-provider')
const json = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'ERC20TokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tip',
        type: 'uint256',
      },
    ],
    name: 'createTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'executeTransaction',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'ERC20TokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tip',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'pending',
            type: 'bool',
          },
        ],
        internalType: 'struct RocketFactory.Transaction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllTransactions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'ERC20TokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tip',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'pending',
            type: 'bool',
          },
        ],
        internalType: 'struct RocketFactory.Transaction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getTransaction',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'ERC20TokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tip',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'pending',
            type: 'bool',
          },
        ],
        internalType: 'struct RocketFactory.Transaction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
const addy = '0x59E83F339eecA8214d39580a40621077F0e2c6c8'
const alchemyKey = process.env.ALCHEMY_API_KEY
const provider = new Provider(
  process.env.PRIVATE_KEY,
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`,
)
const web3 = new Web3(provider)
const Rocket = new web3.eth.Contract(json, addy)

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

// BOT LOGIC
setInterval(function () {
  queryForTransactions()
}, 5000)

// id: '1',
// owner: '0x4Ee949b24eDE8a2D5780f8a5038D940707Ef1070',
// receiver: '0x0000000000000000000000000000000000001010',
// deadline: '1652078273',
// ERC20TokenAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
// amount: '1',
// tip: '0',
// pending: true

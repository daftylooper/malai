const { Web3 } = require('web3');
require('dotenv').config();
const SendTransaction = require("./SepoliaControllers/SendTransaction")
// const Test = require("./controllers/Test")

// Initialize web3 with provider
const web3 = new Web3(process.env.INFURA_URL); // Example assumes a local Ethereum node running on default RPC port

SendTransaction(web3, process.env.SENDER, process.env.RECEIVER, process.env.PRIVATE_KEY, 0.001, 10, {"name": "daftylooper", "network": "sepolia", "band": "polyphia"})

// Test()

// const { Wallet } = require('ethereumjs-wallet')
// const wall = Wallet.generate();
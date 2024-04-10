const { Web3 } = require('web3');
require('dotenv').config();
// const SendTransaction = require("./SepoliaControllers/SendTransaction")
const web3 = new Web3(process.env.INFURA_URL); // Example assumes a local Ethereum node running on default RPC port
// SendTransaction(web3, process.env.SENDER, process.env.RECEIVER, process.env.PRIVATE_KEY, 0.001, 10, {"uncle": "roger"})
// const WriteJsonToIPFS = require('./IFPSControllers/WriteJson')
// var ipfshash = ""
// WriteJsonToIPFS({
//     "task": "Building a Mobile App Prototype",
//     "likes": 15,
//     "dislikes": 2,
//     "comments": [
//       "Impressive project! Looking forward to seeing the prototype.",
//       "Great choice of topic! Mobile app development is exciting.",
//       "Consider incorporating user feedback early in the design process."
//     ]
//   }
// )

// console.log("===============>>>>>>==========", ipfshash)

// setTimeout(()=>{}, 10000)
// const GetJson = require('./IFPSControllers/GetJson')
// GetJson()
// const GetJson = require('./IFPSControllers/GetJson')
// GetJson("QmQa6StB5GvJt4RqoFKAt6cxLR4pN8eBt41wPJdGhim8Cq")
// .then(res=>{
//     console.log(res)
// })
// const RemoveJson = require('./IFPSControllers/RemoveJson')
// RemoveJson("QmQa6StB5GvJt4RqoFKAt6cxLR4pN8eBt41wPJdGhim8Cq")

// const UpdateJsonOnIPFS = require('./IFPSControllers/UpdateJson')

// //increment likes by one
// async function updateStuff() {
//     const ipfshash = await UpdateJsonOnIPFS("QmcgP3w5n5sGGvXzaW2tbwiJZiZN4u2VmuNeu351xmk15f", "dislikes", "1")
//     // console.log("=====>: ", ipfshash)
//     await UpdateJsonOnIPFS(ipfshash, "comments", "does this really work?")
// }

// updateStuff()

// const CompileContract = require('./Helpers/CompileContract')
// CompileContract("Helloworld");

const DeployContract = require('./SepoliaControllers/DeployContract')
DeployContract(web3, 'Helloworld')
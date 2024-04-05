const { Web3 } = require('web3');
require('dotenv').config();
// const SendTransaction = require("./SepoliaControllers/SendTransaction")
// const web3 = new Web3(process.env.INFURA_URL); // Example assumes a local Ethereum node running on default RPC port
// SendTransaction(web3, process.env.SENDER, process.env.RECEIVER, process.env.PRIVATE_KEY, 0.001, 10, {"uncle": "roger"})
const WriteJsonToIPFS = require('./IFPSControllers/WriteJson')
WriteJsonToIPFS({
    "task": "Exploring Machine Learning Algorithms",
    "reactions": {
      "likes": 25,
      "dislikes": 3
    },
    "comments": [
      "Fascinating topic! Can't wait to see your findings.",
      "Great initiative to dive into machine learning!",
      "Consider starting with linear regression for a solid foundation."
    ]
  }  
  )
// const GetJson = require('./IFPSControllers/GetJson')
// GetJson()
// const GetJson = require('./IFPSControllers/GetJson')
// GetJson("QmQa6StB5GvJt4RqoFKAt6cxLR4pN8eBt41wPJdGhim8Cq")
// .then(res=>{
//     console.log(res)
// })

// const RemoveJson = require('./IFPSControllers/RemoveJson')
// RemoveJson("QmQa6StB5GvJt4RqoFKAt6cxLR4pN8eBt41wPJdGhim8Cq")
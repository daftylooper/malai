// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Malai!" });
// });

// const getAllPosts = require("./Routes/GetAllPosts");
// app.use("/", getAllPosts);
// const createPost = require("./Routes/CreatePost");
// app.use("/", createPost);
// const actionOnPost = require("./Routes/ActionOnPost");
// app.use("/", actionOnPost);
// // actiononpost
// app.listen(process.env.PORT, () => console.log(`Creamy Malai served at ${process.env.PORT}`));

const { Web3 } = require('web3');
require('dotenv').config();
// const SendTransaction = require("./SepoliaControllers/SendTransaction");
// const PostTransaction = require('./SepoliaControllers/PostTransaction');
const web3 = new Web3(process.env.INFURA_URL); // Example assumes a local Ethereum node running on default RPC port
// PostTransaction(web3, process.env.SENDER, process.env.RECEIVER, process.env.PRIVATE_KEY, 0.001, 10, {"uncle": "roger"})
// const WriteJsonToIPFS = require('./IFPSControllers/WriteJson')
// var ipfshash = ""
// ipfshash = WriteJsonToIPFS({
//     "index": []
//   }
// )

// ipfshash = "QmaQLZUKYhobcEtECxK8YAsrNZjZ8DZiRZYEnsaJyzSA5C"

// const AddIndex = require('./IFPSControllers/Index')

// AddIndex(ipfshash)

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

// const UpdateJsonOnIPFS = require('./IFPSControllers/UpdateJson');
// const RemoveJsonFromIPFS = require('./IFPSControllers/RemoveJson');

// // //increment likes by one
// async function updateStuff(currentipfshash) {
//     var pfshash = await UpdateJsonOnIPFS(currentipfshash, "dislikes", "1")
//     await RemoveJsonFromIPFS(currentipfshash)
//     pfshash = await UpdateJsonOnIPFS(pfshash, "comments", "does this really work?")
//     await RemoveJsonFromIPFS(pfshash)
// }

// updateStuff("QmWh1g3dnpjEYbSQ32qwbT2aeZDcjUdKPV1dk4NxKDUBtA")

// const CompileContract = require('./Helpers/CompileContract')
// CompileContract("Moderator");

// const DeployContract = require('./SepoliaControllers/DeployContract')
// DeployContract(web3, 'Moderator')

// const GetContract = require('./Helpers/GetContract')
// const CallStateChangingContract = require('./SepoliaControllers/CallStateChangingContract')

// const { contract, signer } = GetContract(web3, "Helloworld", process.env.MODERATOR_CONTRACT)

// const methodABI = contract.methods.set("0xF6cf1d67d29F84A092f5A7614c53ef3a91064590", "daftylooper").encodeABI()
// CallStateChangingContract(web3, methodABI, signer, contract)

// contract.methods.get()
// .call({ from: process.env.SENDER })
// .then(result => {
//   console.log("Result of contract method: ", result);
// })
// .catch(error => {
//   console.error("Error calling contract method: ", error);
// });

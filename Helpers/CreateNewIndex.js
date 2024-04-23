// initialises a new index file
// use this if index has corrupted ipfs

const WriteJsonToIPFS = require("../IFPSControllers/WriteJson")

async function CreateNewIndex() {
    try{
        const ipfsHash = await WriteJsonToIPFS({"index": []})

        console.log("New Index: ", ipfsHash)
        // res.send({"ipfsHash": ipfsHash, "index": newindex})
    }
    catch(error){
        console.log({ error: error.message })
    }
}

CreateNewIndex()
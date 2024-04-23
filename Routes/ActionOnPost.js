const express = require('express')
const router = express.Router()

const UpdateJsonOnIPFS = require("../IFPSControllers/UpdateJson")
const WriteJsonToIPFS = require('../IFPSControllers/WriteJson')
const GetJsonFromIPFS = require('../IFPSControllers/GetJson')
const RemoveJsonFromIPFS = require('../IFPSControllers/RemoveJson')
const PostTransaction = require('../SepoliaControllers/PostTransaction')

router.post('/actiononpost', async(req,res)=>{
    try{
        const newIpfsHash = await UpdateJsonOnIPFS(req.body.cid, req.body.action, req.body.value)

        var index = await GetJsonFromIPFS(process.env.INDEX)
        console.log("Got postJSON: ", index)

        var i = 0;
        index["index"].map((cid)=>{
            if(cid===req.body.cid){
                index["index"][i] = newIpfsHash
            }
            i=i+1;
        })

        await RemoveJsonFromIPFS(process.env.INDEX)
        //write new json and return new cid
        const newIndexHash = await WriteJsonToIPFS(index)
        console.log("Updating index, new hash: ", newIndexHash)

        await PostTransaction({"type": "update post", "old cid": req.body.cid, "postId": newIpfsHash})
        res.send({"ipfsHash": newIpfsHash, "index": newIndexHash})
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
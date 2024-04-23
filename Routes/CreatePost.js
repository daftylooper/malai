const express = require('express')
const router = express.Router()
const WriteJsonToIPFS = require('../IFPSControllers/WriteJson')
const { Web3 } = require('web3');

const web3 = new Web3(process.env.INFURA_URL);
const AddIndex = require('../IFPSControllers/Index')
const PostTransaction = require('../SepoliaControllers/PostTransaction')

router.post('/createpost', async(req,res)=>{
    try{
        const ipfsHash = await WriteJsonToIPFS({
            "user": req.body.user,
            "post": req.body.post,
            "likes": req.body.likes,
            "dislikes": req.body.dislikes,
            "comments": req.body.comments
            // "index": []
        })

        console.log("adding post to index")
        const newindex = await AddIndex(ipfsHash)
        console.log("done executing this")
        console.log("New Index: ", newindex)

        await PostTransaction({"type": "create post", "postId":ipfsHash})
        res.send({"ipfsHash": ipfsHash, "index": newindex})
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})

module.exports = router

// const express = require('express')
// const router = express.Router()

// router.post('/', async(req,res)=>{
//     try{
//     }
//     catch(error){
//         res.status(400).json({ error: error.message })
//     }
// })

// module.exports = router
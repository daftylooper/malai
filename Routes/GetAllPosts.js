const express = require('express')
const router = express.Router()

const GetJsonFromIPFS = require('../IFPSControllers/GetJson')

router.get('/getallposts', async(req,res)=>{
    try{
        var allposts = []
        const index = await GetJsonFromIPFS(process.env.INDEX)
        console.log("GOT Index Page: ", index)
        console.log("INDEX--->", index)
        
        await index["index"].forEach(async(ipfshash) => {
            console.log(ipfshash)
            const res = await GetJsonFromIPFS(ipfshash)
            console.log(res)
            allposts.push(res)
        })
        // console.log("loooo, work ago")
        setTimeout(()=>{
            console.log(">>>>", allposts)
            res.status(200).json(allposts)
        }, 2000)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
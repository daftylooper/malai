const express = require('express')
const router = express.Router()

router.post('/moderate', async(req,res)=>{
    try{
        // req - modedrator address, post address, function-type, value( used if required )
        // call moderate function(..params)
        // only then delete content( if reached consensus aka function returned false )???
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
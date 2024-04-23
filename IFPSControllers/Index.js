const UpdateJsonOnIPFS = require("./UpdateJson")
const GetJsonFromIPFS = require("./GetJson")
const RemoveJsonFromIPFS = require('./RemoveJson')
const WriteJsonToIPFS = require('./WriteJson')

async function AddIndex(cid){
    var index = await GetJsonFromIPFS(process.env.INDEX)
    console.log("Got postJSON: ", index)

    index["index"].push(cid)

    await RemoveJsonFromIPFS(cid)

    console.log("Updated index: ", index)

    //write new json and return new cid
    return await WriteJsonToIPFS(index)
}

module.exports = AddIndex
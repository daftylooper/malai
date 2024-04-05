const axios = require('axios');

async function GetJsonFromIPFS(cid) {
    fileURL = `https://ipfs.io/ipfs/${cid}`
    const response = await axios.get(fileURL)
    // console.log(response.data)
    return response.data
}

module.exports = GetJsonFromIPFS
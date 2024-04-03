const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

async function WriteJsonToIPFS(filepath) {

    const formData = new FormData();
    const file = fs.createReadStream(filepath)
    formData.append('file', file)
    const pinataMetadata = JSON.stringify({
      name: 'daftylooper',
    });
    formData.append('pinataMetadata', pinataMetadata);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${process.env.PINATA_JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

module.exports = WriteJsonToIPFS
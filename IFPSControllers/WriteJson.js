const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

function FileWrite(stuff) {

  fs.unlinkSync("temp")

  const writeStream = fs.createWriteStream("temp")

  writeStream.on('open', () => {
    console.log('Stream opened');
  });
  writeStream.on('error', (err) => {
      console.error('Error writing to stream:', err);
  });
  writeStream.on('finish', () => {
      console.log('Write stream finished writing');
  });

  writeStream.write(JSON.stringify(stuff));  
  writeStream.end()

  setTimeout(()=>{console.log("Closing Write Stream")}, 1000)

}

// I know i'm needlessely deleteing, creating, writing, closing and reading from the file when i can create a blob and passs into the FormData
// But just won't bloody work. This is a bad fixaround, that just... works.

function WriteJsonToIPFS(postData) {

  FileWrite(postData)

  const formData = new FormData();
  const file = fs.createReadStream("temp")
  formData.append('file', file)
  const pinataMetadata = JSON.stringify({
    name: 'daftylooper',
  });
  formData.append('pinataMetadata', pinataMetadata);
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  })
  formData.append('pinataOptions', pinataOptions);

  console.log(formData)

  try{
    axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: "Infinity",
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        'Authorization': `Bearer ${process.env.PINATA_JWT}`
      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(e=>{
      console.log(e)
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = WriteJsonToIPFS
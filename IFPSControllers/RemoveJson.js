const axios = require('axios');
require('dotenv').config();

async function RemoveJson(cid) {
    try {
        const url = `https://api.pinata.cloud/pinning/unpin/${cid}`
        console.log("URL: ", url)
        const response = await fetch(
          url,
          {
            method: "DELETE",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.PINATA_JWT}`,
            },
          }
        );
        // await wait(300);
        // deletedPins++;
        // process.stdout.write(`Deleted ${deletedPins} of ${totalPins} pins\r`);
      } catch (error) {
        console.log(error);
      }
    // const response = await axios.delete(`https://api.pinata.cloud/pinning/unpin/${cid}`, {headers: {Authorization: process.env.PINATA_JWT}})
    // print(response)
}

module.exports = RemoveJson
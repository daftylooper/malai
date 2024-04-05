const GetJsonFromIPFS = require('./GetJson')
const WriteJsonToIPFS = require('./WriteJson')
const RemoveJsonFromIPFS = require('./RemoveJson')

// every post schema is fixed and only the values of each attribute can be updated.
// example - likes/dislikes -> update; comments -> append;

async function UpdateJsonOnIPFS(cid, attribute, value) {
    //get json from ipfs
    const postJSON = await GetJsonFromIPFS(cid)
    console.log("Got postJSON: ", postJSON)
    //perform action

    switch(attribute) {
        case 'likes': postJSON['likes']+=parseInt(value); break;
        case 'dislikes': postJSON['dislikes']+=parseInt(value); break;
        case 'comments': postJSON['comments'].push(value); break;
        default: console.log("Invalid Attribute Type")
    }
    //remove original json
    await RemoveJsonFromIPFS(cid)
    
    console.log("Updated postJSON: ", postJSON)

    //write new json and return new cid
    return await WriteJsonToIPFS(postJSON)
}

module.exports = UpdateJsonOnIPFS
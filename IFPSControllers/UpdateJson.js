const GetJsonFromIPFS = require('./GetJson')
const WriteJsonToIPFS = require('./WriteJson')

// every post schema is fixed and only the values of each attribute can be updated.
// example - likes/dislikes -> update; comments -> append;

async function UpdateJsonOnIPFS(cid, attribute, value) {
    //get json from ipfs
    const postJSON = GetJsonFromIPFS(cid)
    //perform action
    switch(attribute) {
        case 'likes': postJSON['likes']+=value
        case 'dislikes': postJSON['dislikes']+=value
        case 'comments': postJSON['comment'].push(value)
        default: console.log("Invalid Attribute Type")
    }
    //remove original json
    RemoveJsonFromIPFS(cid)
    //write new json and return new cid
    return WriteJsonToIPFS(postJSON)
}

module.exports = UpdateJsonOnIPFS
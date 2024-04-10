const fs = require("fs");

function GetContract(web3, artifactFilename, contractHash) {
    
    const { abi } = JSON.parse(fs.readFileSync("Contracts/Artifacts/"+artifactFilename+".json"));
    // Creating a signing account from a private key
    const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    web3.eth.accounts.wallet.add(signer);
    // Creating a Contract instance
    const contract = new web3.eth.Contract(
        abi,
        contractHash,
    );

    // contract.methods.set("Apr 10 3:27")

    return { contract, signer }
}

module.exports = GetContract

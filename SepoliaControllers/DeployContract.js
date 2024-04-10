const fs = require("fs");

async function DeployContract(web3, artifactFilename) {

    const { abi, bytecode } = JSON.parse(fs.readFileSync("Contracts/Artifacts/"+artifactFilename+".json"));

    // Creating a signing account from a private key
    const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    web3.eth.accounts.wallet.add(signer);

    // Using the signing account to deploy the contract
    const contract = new web3.eth.Contract(abi);
    contract.options.data = bytecode;
    const deployTx = contract.deploy();
    const deployedContract = await deployTx
    .send({
        from: signer.address,
        gas: await deployTx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
        console.log(`Mining deployment transaction ...`);
        console.log(`https://sepolia.etherscan.io/tx/${txhash}`);
    });
    // The contract is now deployed on chain!
    console.log(`Contract deployed at ${deployedContract.options.address}`);
    console.log(
    `Add DEMO_CONTRACT to the.env file to store the contract address: ${deployedContract.options.address}`,
    );
}

module.exports = DeployContract
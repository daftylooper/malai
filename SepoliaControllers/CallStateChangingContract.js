async function CallStateChangingContract(web3, method_abi, signer, contract) {
    // console.log(method_abi)
    const tx = {
        from: signer.address,
        to: contract.options.address,
        data: method_abi,
        value: '0',
        gasPrice: '100000000000',
    };

    console.log(tx)

    const gas_estimate = await web3.eth.estimateGas(tx)
    tx.gas = gas_estimate;
    const signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);
    console.log("Raw transaction data: " + ( signedTx).rawTransaction);
    // Sending the transaction to the network
    const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
        console.log(`Mining transaction ...`);
        console.log(`https://sepolia.etherscan.io/tx/${txhash}`);
    });
    // The transaction is now on chain!
    console.log(`Mined in block ${receipt.blockNumber}`);
}

module.exports = CallStateChangingContract

function PostTransaction(web3, sender, receiver, private_key, value, gas, data) {
    //Unlock account if needed (only necessary if sending transaction from a specific account)
    const account = sender
    const privateKey = private_key
    web3.eth.accounts.wallet.add(privateKey); // Add the account to web3 wallet
    web3.eth.defaultAccount = account; // Set the default account

    const dataObject = JSON.stringify(data);
    const encodedData = web3.eth.abi.encodeParameter('string', dataObject);

    // Build transaction object
    const txObject = {
    from: account,
    to: receiver,
    value: web3.utils.toWei(String(value), 'ether'), // Example: sending 1 ether
    gas: 200000, // Example gas limit
    gasPrice: web3.utils.toWei(String(gas), 'gwei'), // Example gas price in gwei
    // If interacting with a contract, include the contract data here
    data: encodedData,
    };

    // Sign the transaction
    web3.eth.accounts.signTransaction(txObject, privateKey)
    .then(signedTx => {
        // Send the transaction
        return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    })
    .then(receipt => {
        console.log('Transaction successful:', receipt.transactionHash);
    })
    .catch(error => {
        console.error('Transaction failed:', error);
    });
}

module.exports = PostTransaction
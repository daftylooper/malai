const fs = require('fs')
const solc = require("solc");

function compile(sourceCode, contractName){
    // Create the Solidity Compiler Standard Input and Output JSON
    const input = {
        language: "Solidity",
        sources: { main: { content: sourceCode } },
        settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },
    };
    // Parse the compiler output to retrieve the ABI and Bytecode
    const output = solc.compile(JSON.stringify(input));
    //console.log("Compiled Contract: ", output)
    const artifact = JSON.parse(output).contracts.main[contractName];
    //console.log("Artifact: ", artifact)
    return {
        abi: artifact.abi,
        bytecode: artifact.evm.bytecode.object,
    };
}

function CompileContract(contractName) {
    // Load the contract source code
    const sourceCode = fs.readFileSync("Contracts/"+contractName+".sol", "utf8");
    // Compile the source code and retrieve the ABI and Bytecode
    const { abi, bytecode } = compile(sourceCode, contractName);
    // Store the ABI and Bytecode into a JSON file
    const artifact = JSON.stringify({ abi, bytecode }, null, 2);
    // /console.log(artifact)
    fs.writeFileSync("Contracts/Artifacts/"+contractName+".json", artifact);
}

module.exports = CompileContract
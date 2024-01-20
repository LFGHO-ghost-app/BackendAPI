require("dotenv").config();
const path = require("path");
const url = require("url");
const { StatusCodes } = require("http-status-codes");
const fetch = require("node-fetch");

const { add } = require("nodemon/lib/rules");
const { Web3 } = require("web3");
const web3 = new Web3(process.env.SEPOLIA_RPC_URL);
const { contractABI } = require("../lib/contractABI");

exports.processPayment = async (req, res) => {
    try {
        const amount = req.body.amount;
        const address = req.body.address;
        const signature = req.body.signature;
        const contract = new web3.eth.Contract(contractABI, address);
        const functionAbi = contract.methods
            .acceptPayment(address, amount, signature)
            .encodeABI(); // Replace with your method and args
        const account = web3.eth.accounts.privateKeyToAccount(
            `0x${process.env.PRIVATE_KEY}`
        ); // Replace with your private key
        const nonce = await web3.eth.getTransactionCount(account.address);
        const tx = {
            to: address,
            data: functionAbi,
            nonce: nonce,
            gas: 2000000, // Set gas limit
            gasPrice: web3.utils.toWei("10", "gwei"), // Set gas price
        };
        const signedTx = await web3.eth.accounts.signTransaction(
            tx,
            account.privateKey
        );
        const receipt = await web3.eth.sendSignedTransaction(
            signedTx.rawTransaction
        );
        res.json({ success: true, result: receipt.transactionHash });
    } catch (error) {
        console.log("this is the error", error);
        res.json({ success: false, error: error });
    }
};

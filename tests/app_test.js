process.env.PORT = 4000;
process.env.NODE_ENV = "test";
const querystring = require("querystring");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const baseUrl = `http://localhost:${process.env.PORT}`;
const request = require("request");
const assert = require("assert");
const httpStatus = require("http-status-codes");
const server = require("../app/app");
const { expect } = require("chai");
const axios = require("axios"); // Make sure to install axios
const { Web3 } = require("web3");
const web3 = new Web3(process.env.SEPOLIA_RPC_URL);
const ethers = require("ethers");

describe("Test app.js file", () => {
    let mongoServer;
    before(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = await mongoServer.getUri();
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Start your server here if it's not already running
        // baseUrl = 'http://localhost:your_port';
    });
    it("Should work assets endpoint", async () => {
        const response = await axios.get(`${baseUrl}/api/v1/assets`);
        assert.strictEqual(response.data.success, true);
        assert.strictEqual(Object.keys(response.data.results).length, 0);
    });
    it("Should create an asset", async () => {
        let payload = { name: "mock asset", value: 10, image: "https://mock" };
        const response = await axios.post(
            `${baseUrl}/api/v1/assets`,
            querystring.stringify(payload)
        );
        assert.equal(response.data.result.name, payload.name);
        assert.equal(response.data.result.value, payload.value);
        assert.equal(response.data.result.image, payload.image);
    });

    it("Should create and list assets", async () => {
        let payload = { name: "mock asset", value: 10, image: "https://mock" };
        const response = await axios.post(
            `${baseUrl}/api/v1/assets`,
            querystring.stringify(payload)
        );

        const listAssets = await axios.get(`${baseUrl}/api/v1/assets`);
        assert.strictEqual(listAssets.data.success, true);
        assert(listAssets.data.results.length > 0);
    });

    it("Should create and delete an asset", async () => {
        let payload = { name: "mock asset", value: 10, image: "https://mock" };
        const assetCreated = await axios.post(
            `${baseUrl}/api/v1/assets`,
            querystring.stringify(payload)
        );
        const response = await axios.delete(
            `${baseUrl}/api/v1/assets/${assetCreated.data.result._id}`
        );
        assert.strictEqual(response.data.success, true);
    });

    it("Should create and update an asset", async () => {
        let payload = { name: "mock asset", value: 10, image: "https://mock" };
        const assetCreated = await axios.post(
            `${baseUrl}/api/v1/assets`,
            querystring.stringify(payload)
        );
        let payloadPut = { name: "Assset updated" };
        const response = await axios.put(
            `${baseUrl}/api/v1/assets/${assetCreated.data.result._id}`,
            querystring.stringify(payloadPut)
        );
        assert.strictEqual(response.data.success, true);
        assert.strictEqual(response.data.result.name, payloadPut.name);
    });

    it("Should validate smart wallet signature", async () => {
        const payload = {
            amount: 1,
            address: "0xff52083745AEbD841De96336697CbA3334a3A7E9",
            signature:
                "0xb4e0db4e4c5a99e6b1c9bd9d25ff26ce1df016a28428e3a0429b395f72cde1b97b83828f942f9519c9489412a2e8eb4b671d11af9dd520fb987590598b9747ce1c",
        };
        const response = await axios.post(
            `${baseUrl}/api/v1/assets/process-payment`,
            querystring.stringify(payload)
        );
        assert.strictEqual(response.data.success, true);
    });
    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
        // Stop your server here if you started it in beforeAll
    });
});
// Stop your server here if you started it in beforeAll

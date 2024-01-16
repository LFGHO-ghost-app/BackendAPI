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
    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
        // Stop your server here if you started it in beforeAll
    });
});
// Stop your server here if you started it in beforeAll

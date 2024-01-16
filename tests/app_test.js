process.env.PORT = 4000;
process.env.NODE_ENV = "test";
const mongoose = require("mongoose");
const baseUrl = `http://localhost:${process.env.PORT}`;
const request = require("request");
const assert = require("assert");
const httpStatus = require("http-status-codes");
const server = require("../app/app");
const { expect } = require("chai");

describe("Test app.js file", () => {
    before('connect', function(done){
        mongoose.connect('mongodb://mongo:27017/testBoo', {
          useNewUrlParser: true,
        });
     const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', function() {
            console.log('Connected to test database');
            done(); // Ensure you call done() to signal the completion of the async operation
        });
    })

  it("Should work assets endpoint", (done) => {
    request.get(`${baseUrl}/api/v1/assets`, (error, response, body) => {
      const result = JSON.parse(body);
      assert.strictEqual(result.length, 0);
      done();
    });
  });

});

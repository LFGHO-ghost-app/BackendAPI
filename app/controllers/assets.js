const path = require("path");
const url = require("url");
const { StatusCodes } = require("http-status-codes");
const fetch = require("node-fetch");

const assetsSchema = require("../models/AssetsSchema");
const { add } = require("nodemon/lib/rules");

exports.listAssets = async (req, res) => {
    try {
        var assets = assetsSchema.listAssets({"status": "available"});
        res.json(assets);
    } catch (error) {
        console.error("Error fetching assers:", error);
    }
};

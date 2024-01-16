const path = require("path");
const url = require("url");
const { StatusCodes } = require("http-status-codes");
const fetch = require("node-fetch");

const assetsSchema = require("../models/AssetsSchema");
const { add } = require("nodemon/lib/rules");

exports.listAssets = async (req, res) => {
    try {
        var assets = await assetsSchema.listAssets({ status: "available" });
        res.json({ success: true, results: assets });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const name = req.body.name;
        const value = req.body.value;
        const image = req.body.image;

        const newAsset = new assetsSchema.assetsSchema({
            name: name,
            value: value,
            image: image,
            status: "available",
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        assetCreated = await newAsset.save();
        res.json({ success: true, result: assetCreated });
    } catch (error) {
        res.json({ success: false, error: error });
        console.error("Error creating asset:", error);
    }
};

exports.put = async (req, res) => {
    try {
        let dataToUpdate = {}

        const name = req.body.name;
        const value = req.body.value;
        const image = req.body.image;
        const status = req.body.status;
        
        if (name){
            dataToUpdate.name = name
        }

        if (image){
            dataToUpdate.name = image
        }

        if (value){
            dataToUpdate.name = value
        }

        if (status){
            dataToUpdate.status = status
        }

        dataToUpdate.updatedAt = new Date();
        let assetUpdated = await assetsSchema.put(req.params.id, dataToUpdate);
        res.json({ success: true, result: assetUpdated });
    } catch (error) {
        res.json({ success: false, error: error });
        console.error("Error creating asset:", error);
    }
};
exports.delete = async (req, res) => {
    try {
        await assetsSchema.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error });
        console.error("Error creating asset:", error);
    }
};

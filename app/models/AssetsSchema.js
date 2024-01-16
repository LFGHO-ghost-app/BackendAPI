const mongoose = require("mongoose");
const AssetsSchema = new mongoose.Schema({
    name: String,
    value: Number,
    image: String,
    status: String, //[available, sold]
    createdAt: String,
    updatedAt: String,
    paymentCode: String,
    transactionHash: String,
});

const assetsSchema = mongoose.model("assets", AssetsSchema);
module.exports.listAssets = async (filter) => {
    try {
        return await assetsSchema.find(filter);
    } catch (err) {
        console.error(err);
    }
};

module.exports.assetsSchema = assetsSchema;

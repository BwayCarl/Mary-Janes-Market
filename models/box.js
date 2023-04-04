const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoxSchema = new Schema ({
        name: {
            type: String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        img_url: {
            type: String,
            required: true
        },        
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        boolean: Boolean,

        array: Array,

        date: {
            type: Date,
            default: Date.now
        },
    });

const Box = mongoose.model("Box", BoxSchema);

module.exports = Box;

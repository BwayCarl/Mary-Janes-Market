const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema ({
    customerId: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        trim: true,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    img_url: {
        type: String,
        required: true
    }
})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart;
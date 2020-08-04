const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    size: String,
    imageURL: String
})

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    orderNumber: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    items: [itemSchema],
    shipping: {
        type: Number,
        trim: true,
        required: [true, 'Please add some text']
    },
    createdAt: {
        type: String,
        trim: true,
        default: Date.now().toString()
    }
});

module.exports = mongoose.model('Order', OrderSchema);
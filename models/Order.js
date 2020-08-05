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
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Order', OrderSchema);
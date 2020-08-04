const Order = require('../models/Order');

// @desc Get all Orders
// @route GET /api/v1/orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();

        return res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc ADD order
// @route POST /api/v1/orders
exports.addOrder = async (req, res, next) => {
    try {
        const { name, orderNumber, address, items, shipping } = req.body;     //from models/Order.js

        const order = await Order.create(req.body);

        return res.status(201).json({
            success: true,
            data: order
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({   //client error
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc DELETE Order
// @route DELETE /api/v1/orders/:id
exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'No order found.'
            })
        }

        await order.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
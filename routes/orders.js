const express = require('express');
const router = express.Router();
const { getOrders, addOrder, deleteOrder } = require('../controllers/orders');

router
    .route('/')
    .get(getOrders)
    .post(addOrder)

router
    .route('/:id')
    .delete(deleteOrder)

module.exports = router;

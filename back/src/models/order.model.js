import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new mongoose.Schema({
    paypalOrderId: String,
    status: String,
    amount: Number,
    currency: String,
});

export const Order = mongoose.model('Order', orderSchema);

import mongoose from "mongoose";


const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        require: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: [orderItemsSchema],

    address: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CENCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)
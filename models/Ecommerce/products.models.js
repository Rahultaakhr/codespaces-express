import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    description: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)
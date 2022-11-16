const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ""
    },
    size: {
        type: Array,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        public_id: String,
        secure_url: String
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
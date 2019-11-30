const mongoose  = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    productIndex: {
        type: Number,
        require: true,
    },
    userIndex: {
        type: Number,
    }
});

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userIndexes: {
        type: [Number],
    },
    orderIndexes: {
        type: [Number],
    }
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productIndexes: {
        type: [Number],
    },
    orderIndexes: {
        type: [Number],
    }
})

exports.Order = mongoose.model('Order', orderSchema);
exports.Product = mongoose.model('Product', productSchema);
exports.User = mongoose.model('User', userSchema);
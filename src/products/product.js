const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    link: String,
    price: String,
    currency: String,
    description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

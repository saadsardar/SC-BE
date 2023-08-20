const Product = require('./product'); 
const paginate = require('../common/pagination')

const getAllProducts = async (page = 1, perPage = 12) => {
    try {
        const products = paginate(Product, page, perPage);
        return products
    } 
    catch (error) {
    throw error
  }
}

const getProduct = async (id) => {
    try {
        const product = Product.findById(id)
        return product
    } 
    catch (error) {
    throw error
  }
}

const searchProductsByName = async (query) => {
  try {
    const products = await Product.find({ name: { $regex: query, $options: 'i' } }).limit(12);
    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllProducts,
    getProduct,
    searchProductsByName
}
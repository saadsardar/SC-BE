const globalResponse = require('../utils/globalResponse')
const httpStatus = require('http-status')
const productService = require('./product.service')

const getAllProducts = async (req, res, next) => {
    try {
      const { page = 1, perPage = 12 } = req.query;
      console.log(page, "saad")
    const products = await productService.getAllProducts(page, perPage)
    return globalResponse(res, products, 'success', 'Products Listed', httpStatus.OK)
  } catch (error) {
    return globalResponse(res, error, 'False', 'Internal Server Error', httpStatus.INTERNAL_SERVER_ERROR)
  }
}

const getProduct = async (req, res, next) => {
    try {
    const { id } = req.params;
    const products = await productService.getProduct(id)
    return globalResponse(res, products, 'success', 'Products Listed', httpStatus.OK)
  } catch (error) {
    return globalResponse(res, error, 'False', 'Internal Server Error', httpStatus.INTERNAL_SERVER_ERROR)
  }
}

const searchProductsByName = async (req, res, next) => {
  try {
      const { query } = req.query;
    const products = await productService.searchProductsByName(query);
    return globalResponse(
      res,
      products,
      'success',
      'Products Found',
      httpStatus.OK
    );
  } catch (error) {
    return globalResponse(
      res,
      error,
      'False',
      'Internal Server Error',
      httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
    getAllProducts,
    getProduct,
    searchProductsByName
}

const productRoutes = require('./products/products.routes')
const express = require('express')
const router = express.Router()

const defaultRoutes = [
  {
    path: '/product',
    route: productRoutes
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router

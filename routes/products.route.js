const { Router } = require('express')

const { productController} = require('../controllers/products.controller')

const router = Router()

router.get('/products', productsController.getProducts)

router.get('/products/:id', productsController.getProducts)

router.post('/products', productsController.postProducts)

router.delete('/products', productsController.deleteProdukts)

module.exports = router;
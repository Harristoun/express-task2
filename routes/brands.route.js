const { Router } = require("express");

const {brandController} = require('../controllers/brands.controller');

const router = Router();

router.get('/brands', brandsController.getBrands)

router.post('/brands', brandsController.postBrands)

router.delete('/brands', brandsController.deleteBrands)


module.exports = router;
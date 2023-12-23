import express from 'express'
const productRoute = express.Router()
import { productController } from '../controllers/index.js'

productRoute.get('/get-per-product/:id',productController.getPerProduct)
productRoute.post('/create-product',productController.createProduct)
productRoute.get('/get-all-product',productController.getAllProduct)
productRoute.post('/get-product-based-on-category',productController.getProductBasedOnCategory)
productRoute.post('/get-product-based-on-subcategory',productController.getProductBasedOnSubCategory)


export default productRoute
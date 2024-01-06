import express from 'express'
const productRoute = express.Router()
import { productController } from '../controllers/index.js'
import  {uploadImg}  from '../utils/index.js'

productRoute.get('/get-per-product/:id',productController.getPerProduct)
productRoute.post('/create-product',uploadImg.single('image'),productController.createProduct)
productRoute.get('/get-all-product',productController.getAllProduct)
productRoute.post('/get-product-based-on-category',productController.getProductBasedOnCategory)
productRoute.post('/get-product-based-on-subcategory',productController.getProductBasedOnSubCategory)
productRoute.post('/filter-product',productController.filterProduct)


export default productRoute
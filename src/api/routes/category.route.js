import express from 'express'
const categoryRoute = express.Router()
import { categoryController } from '../controllers/index.js'


categoryRoute.post('/create-category',categoryController.createCategory)
categoryRoute.post('/get-per-category',categoryController.getPerCategory)


export default categoryRoute
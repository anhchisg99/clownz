import express from 'express'
const subCategoryRoute = express.Router()
import { subCategoryController } from '../controllers/index.js'

subCategoryRoute.post('/create-subcategory',subCategoryController.createSubCategory)


export default subCategoryRoute
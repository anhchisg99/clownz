import express from 'express'
const adminRoute = express.Router()
import {adminController} from '../controllers/index.js'


adminRoute.post('/register',adminController.register)
adminRoute.post('/login',adminController.login)

export default adminRoute
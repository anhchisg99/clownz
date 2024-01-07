import express from 'express'
const orderRoute = express.Router()
import {orderController} from '../controllers/index.js'
orderRoute.post('/',orderController.order)

export default orderRoute
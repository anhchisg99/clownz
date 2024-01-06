import mongoose from "mongoose";
const Schema = mongoose.Schema


const orderSchema = new Schema({
    cartId:Number,
    orderId:Number,
    userId:Number,
    shipping:Object,
    payment:Object,
    list_items: Array
})
export default mongoose.model('Order',orderSchema)

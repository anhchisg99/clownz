import mongoose from "mongoose";
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    productId : Number,
    quantity : Number,
    reservations: Array,
    create_at:{type:Date,default:Date.now}
},{
    collection:'Inventory',
    timestamps:true
})

export default mongoose.model('Inventory',inventorySchema)
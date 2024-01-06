import mongoose from 'mongooseo'
const Schema = mongoose.Schema

const productVarientSchema = Schema({
    name:String,
    inventory:Number
})


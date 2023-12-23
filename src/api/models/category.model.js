import mongoose from 'mongoose'
const Schema = mongoose.Schema


const categorySchema = Schema({
    name:{
        type:String,
        required:true
    },
    subCategory:[{
        type:Schema.Types.ObjectId,
        ref:'SubCategory'
    }]
})

export default mongoose.model('Category',categorySchema)
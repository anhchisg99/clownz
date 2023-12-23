import mongoose from 'mongoose'
const Schema = mongoose.Schema


const subCategorySchema = Schema({
    name:{
        type:String,
        required:true
    },
  
})

export default mongoose.model('SubCategory',subCategorySchema)
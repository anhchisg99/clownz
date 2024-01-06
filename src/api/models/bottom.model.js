import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bottomSchema = Schema({
    col_1 : Array,
    col_2 : Array
})
export default mongoose.model('Bottom',bottomSchema)
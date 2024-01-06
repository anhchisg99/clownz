import mongoose from "mongoose";
const Schema = mongoose.Schema


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    quantity: Number,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    // desc:Array,
    image: {

        type:String

    },
    short_name: {
        type: String
    },
    discount: Number,
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    size: { type: String, enum: ["S", "M", "L"] }
}, { timestamps: true })

productSchema.virtual('finalPrice').get(function () {
    if (this.discount) {

        return this.price - ((this.discount * this.price) / 100)
    }
})
export default mongoose.model('Product', productSchema)
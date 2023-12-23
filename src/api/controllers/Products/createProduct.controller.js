import { productService } from "../../services/index.js";
import handler from "../../utils/upload_file.js";
export default async function createProduct(req, res) {
    try {

        const { name, quantity, price,category,subCategory } = req.body;
        // console.log(name,price,quantity)
        // let imageUrl = await handler(req,res)
        // console.log(imageUrl)
        const product = await productService.createProduct({ name, quantity, price,category,subCategory })
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
    }
}
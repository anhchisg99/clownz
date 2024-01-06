import { productService } from "../../services/index.js";

export default async function getAllProduct(req, res) {
    try {

        const product = await productService.getAllProduct()
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
    }
}

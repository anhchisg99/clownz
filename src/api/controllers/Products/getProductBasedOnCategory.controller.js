import { productService } from "../../services/index.js";

export default async function getProductBasedOnCategory(req, res) {
    try {
        const {category} = req.body
        const products = await productService.getProductBasedOnCategory(category)
        res.send(products)
    } catch (error) {
        console.log(error.message)
    }
}
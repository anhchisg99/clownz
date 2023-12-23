import { productService } from "../../services/index.js";

export default async function getProductBasedOnCategory(req, res) {
    try {
        const {subCategory} = req.body
        const products = await productService.getProductBasedOnSubCategory(subCategory)
        res.send(products)
    } catch (error) {
        console.log(error.message)
    }
}
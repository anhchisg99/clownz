import { productService } from "../../services/index.js";

export default async function getPerProduct(req, res) {
    try {
        const { id } = req.params;

        const products = await productService.getPerProduct(id)
        res.send(products)
    } catch (error) {
        console.log(error.message)
    }
}
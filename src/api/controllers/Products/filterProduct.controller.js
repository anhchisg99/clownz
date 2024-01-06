import { productService } from "../../services/index.js";

export default async function filterProduct(req, res) {
    try {
        const {category,option_1,option_2,option_3} = req.body
        const price_options  =[]
        if(option_1){
            price_options.push({"$and":[{"price":{"$gt":1000}},{"price":{"$lte":5000}}]})
        }
        if(option_2){
            price_options.push({"$and":[{"price":{"$gt":0}},{"price":{"$lte":500}}]})
        }
        console.log({category,price_options})
        const product = await productService.filterProduct(category,price_options)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
    }
}

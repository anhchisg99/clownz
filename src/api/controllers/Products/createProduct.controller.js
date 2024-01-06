import { productService } from "../../services/index.js";
import handler from "../../utils/upload_file.js";


export default async function createProduct(req, res) {
    try {

        const { name, quantity, price,category,subCategory,size,variant_color,variant_size,isVariant} = req.body;
        let image = req.file.path
        let product_list = {name, quantity, price,category,subCategory,size,image} 
        let variants = []
        if(isVariant){
            variants.push({"dimensions":{"color":variant_color,size:variant_size}})
            product_list['isVariant']=true
            product_list['variantions'] = variants
        }

        const product = await productService.createProduct(product_list)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
    }
}
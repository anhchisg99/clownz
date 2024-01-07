// import Product from '../models/product.model.js'
import { getPerCategory } from './category.service.js'
import { getPerSubCategory } from './subCategory.service.js'
import {Product} from '../models/index.js'
export async function getProduct(){
    try {
        
        return await Product.find()
    } catch (err) {
        console.log(err.message)
    }
}
export async function createProduct(product){
    try {
        let product_list = {
            name:product.name,
            quantity:product.quantity,
            price:product.price,
            category: product.category,
            subCategory: product.subCategory,
            size:product.size,
            thumbnail:product.image 
        }
        if(product.isVariant){
            product_list["variantions"] = product.variantions

        }
        console.log(product_list)
        return await Product.create(product_list)
        // return _product

    } catch (err) {
        console.log(err.message)
        
    }
}

export async function getAllProduct(){
    try {
        return await Product.find({})

    } catch (error) {
        console.log(error.message)
    }
}
export async function getProductBasedOnCategory( name){
    try {
       const _category = await getPerCategory(name)
       return  await Product.find({category:_category._id})
       
    //    return product
    } catch (error) {
        console.log(error.message)
        
    }
}
export async function getProductBasedOnSubCategory( name){
    try {
       const _subcategory = await getPerSubCategory(name)
       console.log(_subcategory)
       return  await Product.find({subCategory:_subcategory._id})
       
    //    return product
    } catch (error) {
        console.log(error.message)
        
    }
}

export async function getPerProduct(_id){
    try {
        return  await Product.findById(_id)
    } catch (error) {
        console.log(error.message)
    }
}

export async function filterProduct(category,price_options){
    try {
        let filter =  {}
        const _category = await getPerCategory(category)
        if(price_options.length === 0){
            price_options = null
        }
        if(category){
            filter['category'] = _category._id
        }
        if(price_options){
            filter['$and'] = price_options
        }
        console.log(`filter: ${filter.category}`)
        return await Product.find(filter)
    } catch (error) {
        console.log(error.message)
        
    }
}
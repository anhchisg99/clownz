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
        return await Product.create({
            name:product.name,
            quantity:product.quantity,
            price:product.price,
            category: product.category,
            subCategory: product.subCategory,
            "image.url":product.imageUrl
        })
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


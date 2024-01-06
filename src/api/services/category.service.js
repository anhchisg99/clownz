import {Category} from '../models/index.js'

export async function createCategory(name,subCategory){
    try {
        
        return await Category.create({name,subCategory})
    } catch (error) {
        console.log(error.message)
    }
}
export async function getPerCategory(name){
    try {
        // console.log(name)
        return await Category.findOne({name})
    } catch (error) {
        console.log(error.message)
        
    }
}
export async function getAllCategory()  {
    try {
        // console.log(name)
        return await Category.find()
    } catch (error) {
        console.log(error.message)
        
    }
}
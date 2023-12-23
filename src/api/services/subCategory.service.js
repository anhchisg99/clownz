import {SubCategory} from '../models/index.js'

export async function createSubcategory(name){
    try {
        
        return await SubCategory.create({name})
    } catch (error) {
        console.log(error.message)
    }
}

export async function getPerSubCategory(name){
    try {
        
        return await SubCategory.findOne({name})
    } catch (error) {
        
        console.log(error.message)

    }
}
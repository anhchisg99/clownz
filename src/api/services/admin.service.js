import createHttpError from "http-errors";
import { Admin } from "../models/index.js";
export async function Register(username,password){
    try {
        return await Admin.create({username:username,password:password})
    } catch (error) {
        console.log(error)
    }
}


export async function Login(username,password){
    const admin  = await Admin.findOne({username})
    
    if(!admin){
        throw createHttpError.NotFound('User not registerd')
    }

    const isValid = await admin.isCheckPassword(password)
    if(!isValid){
        throw createHttpError.Unauthorized()   

    }
    return  admin
}
import {Order} from '../models/index.js'


export async function makeOrder(orderData){
    try {
        return await  new Order(orderData)
        // return await order
    } catch (error) {
        console.log(error)
        
    }
}


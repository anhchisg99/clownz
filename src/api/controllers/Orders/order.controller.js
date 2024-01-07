import { orderService } from "../../services/index.js";
// import { Inventory } from '../../models/index.js'
// import { del } from '../../services/redis.js'
// import createError from "http-errors";
import StatusCode from "http-status-codes";

// import { convertRedisToArray } from '../../utils/index.js'
// import { emailValidation } from '../../validations/validation.js'


export default async function makeOrder(req, res) {
  try {
    let {

      body: { street, city, phone, cart,quotes,full_address,name },  
    } = req;
    // let cart = body
    
    // let products = await convertRedisToArray(sessionID);
    const order = await orderService.makeOrder({
      'shipping_address.street':street, 'shipping_address.city':city,phone,line_items:cart,quotes,'shipping_address.full_address':full_address,customer_name:name
  })
    order.save()

    // return res.send(`success saved in`);
    return res.sendStatus(StatusCode.OK);




  } catch (error) {
    res.status(400).json({ error });
  }
}

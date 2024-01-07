import productRoute from "./product.route.js";
import categoryRoute from "./category.route.js";
import subCategoryRoute from "./subCategory.route.js";
import orderRoute from "./order.route.js"
import adminRoute from "./admin.route.js"

function route(app){
    app.use('/product',productRoute)
    app.use('/category',categoryRoute)
    app.use('/sub-category',subCategoryRoute)
    app.use('/order',orderRoute)
    app.use('/admin',adminRoute)
}

export default route
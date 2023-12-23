import productRoute from "./product.route.js";
import categoryRoute from "./category.route.js";
import subCategoryRoute from "./subCategory.route.js";

function route(app){
    app.use('/product',productRoute)
    app.use('/category',categoryRoute)
    app.use('/sub-category',subCategoryRoute)
}

export default route
import { subCategoryService } from "../../services/index.js";

export default async function createSubCategory(req, res) {
    try {

        const { name } = req.body;
        const subCategory = await subCategoryService.createSubcategory(name)
        res.status(200).json(subCategory)
    } catch (error) {
        console.log(error.message)
    }
}
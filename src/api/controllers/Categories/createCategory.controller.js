import { categoryService } from "../../services/index.js";

export default async function createCategory(req, res) {
    try {

        const { name,subCategory } = req.body;
        const category = await categoryService.createCategory(name,subCategory)
        res.status(200).json(category)
    } catch (error) {
        console.log(error.message)
    }
}
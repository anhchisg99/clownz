import { categoryService } from "../../services/index.js";

export default async function getAllCategory(req, res) {
    try {

        const category = await categoryService.getAllCategory()
        res.status(200).json(category)
    } catch (error) {
        console.log(error.message)
    }
}
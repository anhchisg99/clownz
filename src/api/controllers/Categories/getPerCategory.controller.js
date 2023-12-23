import { categoryService } from "../../services/index.js";

export default async function getPerCategory(req, res) {
    try {

        const { name } = req.body;
        const category = await categoryService.getPerCategory(name)
        res.status(200).json(category)
    } catch (error) {
        console.log(error.message)
    }
}
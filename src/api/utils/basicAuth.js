import Admin from '../models/admin.model.js'

const authPage = permission =>{
    return (req,res,next)=>{
        const {adminId} = req.body

        if(!adminId){
            return res.status(403).json("you need sign in")
        }
        const admin = Admin.findById(adminId)
        if(!admin){
            return res.status(403).json("User not found")

        }
        const {role} = admin
        if(!permission.includes(role)){
            return res.status(403).json("you dont have permission")
        }
        next()

    }  
}

export default authPage
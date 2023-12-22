import { userModel } from "../../../databases/models/user.model.js"






export const getAllUsers = async (req, res) =>{
    const users = await userModel.findAll()
    res.json({message:"success"  ,users})
}

export const postUser = async(req,res)=>{
    const{name , email , password} =req.body
    await userModel.create({name , email , password});
    res.json({message:"user created"})
}




export const updateUser = async (req,res)=>{
    const user = await userModel.update(req.body , {
        where:{
            id:req.params.id
            }
            })
            res.json(user)
            }



export const deleteUser = (req,res)=>{
    userModel.destroy({
        where:{
            id:req.params.id
            }
            })
            res.json({message:"user deleted"})
            }





import { errorHandler } from "../utils/error.js"
import bcrypt from 'bcrypt';
import User from '../models/User.js'


export const test = (req,res) => {
    res.json({
        message:"hello Mahantesh"
    })
}

export const updateUser = async (req,res,next) =>{
    if(req.user.id !== req.params.id) 
    return next(errorHandler(401, 'You can only update your Account'))
    try {
        if(req.body.password){
            req.body.password=bcrypt.hashSync(req.body.password,10)
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                email:req.body.password,
                password:req.body.password,
                avatar:req.body.avatar,
            },
        },{new:true})
        const {password, ...rest} = updateUser._doc;
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
    
};

export const deleteUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only delete your account!"))
    try {
        await User.findByIdAndDelete(req.params.id)
        res.clearCookie('access_token')
        res.status(200).json("User has been deleted successfully!")
        
    } catch (error) {
        next(error)
        
    }

}



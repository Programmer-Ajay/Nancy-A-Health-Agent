import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true
            },
        password:{
            type:String,
            required:function(){
                return !this.googleuser
            },
            unique:true
        },
        googleUser:{
            type:Boolean,
            default:false
        },
        refreshToken:{
            type:String
        }
    }
    ,{timestamps:true})

export const User=mongoose.model("User",userSchema)

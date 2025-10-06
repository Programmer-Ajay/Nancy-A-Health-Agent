console.log("users")
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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
                return !this.googleUser
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


    userSchema.pre('save',async function(next){
        if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10)
        next();
        }else{
            return next();
        }

    })

    userSchema.methods.isPasswordCorrect = async function (password) {
        if(this.googleUser)
            return false;
        return await bcrypt.compare(password, this.password)
    }
    
    
    userSchema.methods.generateAccessToken=function(){
        return jwt.sign(
            {
                _id:this._id,
                username: this.username,
                googleUser:this.googleUser
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }


    userSchema.methods.generateRefreshToken = function() {
        return jwt.sign(
            {
                _id: this._id,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }


export const User=mongoose.model("User",userSchema)






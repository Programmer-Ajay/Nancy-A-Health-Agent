
import app from "./app.js";
import dotenv from "dotenv"
 import { connectDb } from "./src/db/db.js";

 dotenv.config({
    path:"../.env"
 })

//  console.log(process.env.MONGODB_URL);
// routes



 //connection of db
//promise successfull zalyavr .then use krtat

  connectDb().then(()=>{

    app.on('error',(error)=>{
            console.log("error",error);
            throw error
        })

    app.listen(process.env.PORT || 3000 ,()=>{
        console.log(`server is running on ${process.env.PORT}`);
    })

  }).catch((error)=>{
    console.log("MongoDB connection is failed");
  })




 
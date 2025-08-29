

import mongoose from "mongoose";
 // db is in a another country so its takes time to run i.e we use async await
 export const connectDb=async()=>{

    try {
          
      const connection= await mongoose.connect(`${process.env.MONGODB_URL}`);

      console.log("DB is connected!!!");
    //   console.log(connection);

    } catch (error) {
        console.log("MongoDb connection error");
        process.exit(1)
    }
}
 // hii wolrd
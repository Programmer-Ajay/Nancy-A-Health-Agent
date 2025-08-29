
import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
const app=express();




// middleware 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true     // for accessing cookies
}))

app.use(express.json({
    limit:"30kb"
}))
app.use(express.urlencoded({
    limit:"20kb",
    credentials:true
}))


app.use(cookieParser())

export default app;
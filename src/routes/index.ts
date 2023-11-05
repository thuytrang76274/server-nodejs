import { Application } from "express";
import userRoute from "./user.route";

const route = (app: Application) => {
    app.use("/user", userRoute);


    app.get('/',(req,res)=>{
        console.log("tesst");
        res.status(200).json({message:"ok"})
    })
   app.get('/ping',(req,res)=>{
       console.log("tesst");
       res.status(200).json({message:"ok ping"})
      })
}
export default route;
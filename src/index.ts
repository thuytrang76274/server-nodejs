import express from "express"
import sequelize from "./config/DBconnect"
const app= express() 
const port= 8080
app.get('/',(req,res)=>{
 console.log("tesst");
 res.status(200).json({message:"ok"})
 sequelize.testconnect()
})
app.get('/ping',(req,res)=>{
    console.log("tesst");
    res.status(200).json({message:"ok ping"})
    sequelize.testconnect()
   })
app.listen(port,()=>
{
    console.log(`serrver run on 8080`);
}
)
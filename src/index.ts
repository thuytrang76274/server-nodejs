import express from "express"
import sequelize from "./config/DBconnect"

import route from "./routes/index";



const app= express() 
const port= 8080

route(app)
app.listen(port,()=>
{
    console.log(`serrver run on 8080`);
}
)
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database:"bdouit9jfnd7b8nztufu",
    username:"unlgbpyzkfyqvrty",
    password:"XsiKroPMTk6z6TrMzNm2",
    host:"bdouit9jfnd7b8nztufu-mysql.services.clever-cloud.com",
    dialect:"mysql",
 
});

async function testconnect() {
    try{
        await sequelize.authenticate()
        console.log("kết nối database thành công");
    }
    catch(e)
    {
        console.log("không thể kết nối database",e);
    }

}
testconnect()
export default sequelize;
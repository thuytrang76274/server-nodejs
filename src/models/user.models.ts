import { User } from "../interfaces/user.interface";
import  { DataTypes } from "sequelize";
import sequelize from "../config/DBconnect";

export const userModel = sequelize.define<User>(
    "users",
    {
        id: { type: DataTypes.STRING(20), primaryKey: true },
        fullName: DataTypes.STRING(50),
        email: DataTypes.STRING(50),
        password: DataTypes.STRING(300),
       
      },
      {
        timestamps: false,
        tableName: "users",
      }
    
)

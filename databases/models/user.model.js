import  {Sequelize , DataTypes}  from "sequelize"
import { conn } from "../dbconnection.js"

export const userModel =conn.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
    ,
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,password:{
        type:DataTypes.STRING
    }
})

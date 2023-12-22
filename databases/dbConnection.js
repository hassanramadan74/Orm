import { Sequelize } from "sequelize";

export const conn = new Sequelize('orm','root','',{
    host:'localhost',
    dialect:"mysql"
})
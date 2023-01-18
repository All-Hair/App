// const {models}=require('../models')
// const Appointment = require('./Appointment')
module.exports=(sequelize,DataType)=>{
    const User = sequelize.define('User',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        name:{
           type:DataType.STRING,
         
        },
        phone:{
            type:DataType.INTEGER,
           
        },
        email:{
            type:DataType.STRING,
         
        },
        gender:{
            type:DataType.STRING,
            
        },
        adress:{
            type:DataType.STRING,
           
        },
        image:{
            type:DataType.STRING,
            
        },
    })
    // User.associate=(models)=>{
    //     User.belongsToMany(models.Product,{through :"Appointment" })
    // }
    User.associate=(models)=>{
        User.belongsToMany(models.Product,{through :"UserProduct" })
        User.belongsToMany(models.Saloon,{through:"Appointment"})
        User.belongsToMany(models.Post,{through:"UserPost"})
    }

    return User 
}
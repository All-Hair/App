const {models}=require('../models')
module.exports=(sequelize,DataType)=>{
    const User = sequelize.define('User',{
        // Product: sequelize.import('./Product.model.js'),
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        name:{
           type:DataType.STRING,
           allowNull:true 
        },
        phone:{
            type:DataType.INTEGER,
            allowNull:true
        },
        email:{
            type:DataType.STRING,
            allowNull:true
        },
        gender:{
            type:DataType.STRING,
            allowNull:true
        },
        adress:{
            type:DataType.STRING,
            allowNull:true
        },
        image:{
            type:DataType.STRING,
            allowNull:true
        },
    })
    User.associate=(models)=>{
        User.belongsToMany(models.Product,{through : 'UserProduct'})
    }

    return User 
}
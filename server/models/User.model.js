module.exports=(sequelize,DataType)=>{
    const User = sequelize.define('User',{
        name:{
           type:DataType.STRING,
           allowNull:false 
        },
        phone:{
            type:DataType.TINYINT,
            allowNull:false
        },
        email:{
            type:DataType.STRING,
            allowNull:false
        },
        gender:{
            type:DataType.STRING,
            allowNull:false
        },
        adress:{
            type:DataType.STRING,
            allowNull:false
        },
        image:{
            type:DataType.STRING,
            allowNull:false
        },
       

    })
}
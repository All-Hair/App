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
    // User.associate=models=>{
    //     User.hasMany(models.Product,{
    //         onDelete:"cascade"
    //     })
    // }
    // User.belongsToMany(Product,{through : 'UserProduct'})

    return User 
}
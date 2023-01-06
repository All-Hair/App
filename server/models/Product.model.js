module.exports=(sequelize,DataType)=>{
    const Product = sequelize.define('Product',{
        // User: sequelize.import('./User.model.js'),

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        brand:{
            type:DataType.STRING,
            allowNull:false
        },
        name:{
            type:DataType.STRING,
            allowNull:false
        },
        price:{
            type:DataType.TINYINT,
            allowNull:false
        },
        stack:{
            type:DataType.TINYINT,
            allowNull:false
        },
        color:{
            type:DataType.STRING,
            allowNull:false
        },
        category:{
            type:DataType.STRING,
            allowNull:false
        },
        description:{
            type:DataType.STRING,
            allowNull:false
        },
        date:{
            type:DataType.STRING,
            allowNull:false
        },
        image:{
            type:DataType.STRING,
            allowNull:false
        }
    })
    // Product.associate=models=>{
    //     Product.belongsToMany(models.User,{
    //         onDelete:"cascade"
    //     })
    // }
    // Product.belongsToMany(User,{through : 'UserProduct'})


    return Product
}
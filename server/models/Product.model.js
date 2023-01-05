module.exports=(sequelize,DataType)=>{
    const Product = sequelize.define('Product',{
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
            allowNull:true
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
            allowNull:true
        },
        image:{
            type:DataType.STRING,
            allowNull:false
        }
    })
    return Product
}
module.exports=(sequelize,DataType)=>{
    const Menu = sequelize.define('Menu',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        service:{
            type:DataType.STRING,
            allowNull:false
        },
        price:{
            type:DataType.STRING,
            allowNull:false
        },
        image:{
            type:DataType.STRING,
            allowNull:false
        },
        category:{
            type:DataType.STRING,
            allowNull:false
        }
    })
    return Menu
}
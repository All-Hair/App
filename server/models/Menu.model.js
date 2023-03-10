// const {models}=require('../models')

module.exports=(sequelize,DataType)=>{
    const Menu = sequelize.define('Menu',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        service:{
            type:DataType.STRING,
            allowNull:true
        },
        price:{
            type:DataType.INTEGER,
            allowNull:true
        },
        image:{
            type:DataType.STRING,
            allowNull:true
        },
        category:{
            type:DataType.STRING,
            allowNull:true
        }
    })
    Menu.associate=(models)=>{
      Menu.belongsTo(models.Saloon)
    }

    return Menu
}
module.exports=(sequelize,DataType)=>{
    const Cart = sequelize.define('Cart',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        totalPrice:{
            type:DataType.INTEGER,
            allowNull:false
        },
        
    })
    Cart.associate=models=>{
        Cart.belongsTo(models.Product,{
            onDelete:"cascade"
        })
        Cart.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }
    return Cart
}
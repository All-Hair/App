module.exports=(sequelize,DataType)=>{
    const Profile = sequelize.define('Profile',{
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
    Profile.associate=models=>{
        Profile.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }
    return Profile 
}
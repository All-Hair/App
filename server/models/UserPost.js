
module.exports=(sequelize,DataType)=>{
 const UserPost = sequelize.define('UserPost',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      liked: {
        type:DataType.TINYINT,
      }
 })
 return UserPost

}
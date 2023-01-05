module.exports=(sequelize,DataType)=>{
  const Post =sequelize.define('Post',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    title:{
        type:DataType.STRING,
        allowNull:false
    },
    description:{
        type:DataType.STRING,
        allowNull:false
    },
    media:{
        type:DataType.STRING,
        allowNull:false
    },
    date:{
        type:DataType.DATE,
        allowNull:false
    },
    like:{
        type:DataType.TINYINT,
        allowNull:false
    }
  }) 
  return Post
}
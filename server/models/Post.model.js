module.exports=(sequelize,DataType)=>{
  const Post =sequelize.define('Post',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    title:{
        type:DataType.STRING,
        allowNull:true
    },
    description:{
        type:DataType.TEXT,
        allowNull:true
    },
    media:{
        type:DataType.TEXT,
        allowNull:true
    },
    date:{
        type:DataType.DATE,
        allowNull:true
    },
    like:{
        type:DataType.TINYINT,
        allowNull:true
    }
  }) 
  return Post
}
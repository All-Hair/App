

module.exports=(sequelize,DataType)=>{
    const Comments = sequelize.define('Comments',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          content:{
            type:DataType.TEXT
          }
    })
    Comments.associate=(models)=>{
        Comments.belongsTo(models.UserPost)
    }
    return Comments
}
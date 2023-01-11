module.exports=(sequelize,DataType)=>{
const Appointment = sequelize.define('Appointment',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    price:{
        type:DataType.TINYINT,
        allowNull:false
    },
    date:{
        type:DataType.DATE,
        allowNull:false
    }
})
  return Appointment
}


module.exports=(sequelize,Datatype)=>{
 const Saloon = sequelize.define("Saloon",{
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    name:{
        type:Datatype.STRING,
        allowNull:false
    },
    adress:{
        type:Datatype.STRING,
        allowNull:false
    },
    state:{
        type:Datatype.STRING,
        allowNull:false
    },
    city:{
        type:Datatype.STRING,
        allowNull:false
    },
    type:{
        type:Datatype.STRING,
        allowNull:false
    },
    image:{
        type:Datatype.STRING,
        allowNull:false
    },
    gender:{
        type:Datatype.STRING,
        allowNull:false
    },
    description:{
        type:Datatype.STRING,
        allowNull:false
    },
    email:{
        type:Datatype.STRING,
        allowNull:false
    },
    home_service:{
        type:Datatype.BOOLEAN,
        defaultValue : false 
    },
    rate:{
        type:Datatype.TINYINT,
        allowNull:false
    }
    
 })
 return Saloon
}
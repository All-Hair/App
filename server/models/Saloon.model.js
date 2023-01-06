module.exports=(sequelize,Datatype)=>{
 const Saloon = sequelize.define("Saloon",{
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    name:{
        type:Datatype.STRING,
        allowNull:true
    },
    adress:{
        type:Datatype.STRING,
        allowNull:true
    },
    state:{
        type:Datatype.STRING,
        allowNull:true
    },
    city:{
        type:Datatype.STRING,
        allowNull:true
    },
    type:{
        type:Datatype.STRING,
        allowNull:true
    },
    image:{
        type:Datatype.STRING,
        allowNull:true
    },
    gender:{
        type:Datatype.STRING,
        allowNull:true
    },
    description:{
        type:Datatype.TEXT,
        allowNull:true
    },
    email:{
        type:Datatype.STRING,
        allowNull:true
    },
    home_service:{
        type:Datatype.BOOLEAN,
        defaultValue : false 
    },
    rate:{
        type:Datatype.TINYINT,
        allowNull:true
    }
    
 })
 return Saloon
}
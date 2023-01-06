const express = require('express')
const cors = require("cors");
const db =require('./models')
const app = express()  
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


//Require application Route modules 
const SaloonRoute = require ('./routes/Saloon.routes')

 
//Add Routes to the middleware 
app.use('/saloon',SaloonRoute)




app.get('/', (req, res) => {
    res.send('welcome in All-hair')
  })

const product = require("./routes/product.routes");
const menu = require("./routes/menu.routes");
const user = require("./routes/user.routes")

app.use('/product',product)
app.use('/api',menu)
app.use('/api',user)
const PORT = 5000; 
db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`your server raning in port ${PORT}`);
    })
})

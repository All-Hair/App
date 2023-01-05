const express = require('express')
const cors = require("cors");
const db =require('./models')
const app = express()  
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('welcome in All-hair')
  })

  require("./app/routes/product")(app);


const PORT = 5000; 
db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`your server raning in port ${PORT}`);
    })
})

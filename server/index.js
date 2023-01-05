const express = require('express')
const db =require('./models')
const app = express()  
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get('/', (req, res) => {
    res.send('welcome in All-hair')
  })


const PORT = 5000; 
db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`your server raning in port ${PORT}`);
    })
})

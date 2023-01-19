const {Post} = require('../models')

module.exports={
     
    getAll:async(req,res)=>{
        try {
            const post = await Post.findAll()
            res.status(200).json(post)
        }
        catch(error){
            res.status(404).json(error)
        }
    },
    
    create: async(req,res) =>{
        try {
            const post = await Post.create(req.body)
            res.status(201).json(post)
        }
        catch(error){
         res.status(404).json(error)  
        }
    }
}

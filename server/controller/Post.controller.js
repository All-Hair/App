// const { default: Saloon } = require('../../my-app/screens/saloon/Saloon')
const {Post} = require('../models')
const { post } = require('../routes/Saloon.routes')
const {Saloon} = require ("../models")

module.exports={
     
    getAll:async(req,res)=>{
        try {
            const post = await Post.findAll({ 
                include: [{
                model: Saloon
              }]
            })
            res.status(200).json(post)
        }
        catch(error){
            res.status(404).json(error)
        }
    },
    getByEmail:async(req,res)=>{
     const   email = req.params.email
        try {
            const post = await Post.findAll({ 
             where: { email: email } ,
                include: [{
                model: Saloon
              }]
              
            })
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
    },
    deletePost:async(req,res)=>{
        const id = req.params.id
        try{
            const post = await Post.destroy({where:{id:id}})
            res.status(201).json(post)
        }catch(error){
            res.status(404).json(error)
        }
    }
}

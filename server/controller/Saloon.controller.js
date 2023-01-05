const {Saloon} = require ("../models")

module.exports = {
    getAll :async(req,res) =>{
        try{
            const saloon = await Saloon.findAll()
            res.status(200).json(saloon)
        }
        catch(error){
            res.status(404).json(error)
        }

    },
   add: async (req,res) =>{
    try {
       const saloon = await Saloon.create(req.body)
       res.status(201).json(saloon) 
    }
    catch (error){
        res.status(404).json(error)
    }
   },
//    deleteSaloon :async (req,res)=>{
//     let id = req.params.id
//     try{
//         const deletesaloon  =await Saloon.
//     }
//    }
   

}
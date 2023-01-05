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

    }
   add: async (req,res)

}
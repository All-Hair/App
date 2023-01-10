const express = require("express")
const router = express.Router() ;

const {getAll ,add, deleteSaloon, updateSaloon , findOneByEmail} = require('../controller/Saloon.controller');

// GET request to get data from Saloon 
router.get('/getAll',getAll)
// POST request to add data from Saloon 
router.post('/add',add)
// DELETE request to delete data from saloon 
router.delete('/delete/:id', deleteSaloon)
// PUT request to update data from saloon 
router.put('/update/:id',updateSaloon) 
// get one saloon by email
router.get("/getone/:email", findOneByEmail);




module.exports= router ; 
const express = require("express")
const router = express.Router() ;

// GET request to get data from Saloon 
router.get('/getAll',)
// POST request to add data from Saloon 
router.post('/add')
// DELETE request to delete data from saloon 
router.delete('/delete/:id')
// PUT request to update data from saloon 
router.put('/update') 



module.exports= router ; 
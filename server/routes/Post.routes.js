const express = require ('express')
const router = express.Router()
const {create,getAll,deletePost} = require('../controller/Post.controller')

router.get('/',getAll)
router.post('/add',create)
router.delete('/delete/:id',deletePost)



module.exports= router 
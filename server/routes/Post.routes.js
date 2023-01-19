const express = require ('express')
const router = express.Router()
const {create,getAll} = require('../controller/Post.controller')

router.get('/',getAll)
router.post('/add',create)



module.exports= router 
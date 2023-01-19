const express = require ('express')
const router = express.Router()
const {create} = require('../controller/Post.controller')


router.post('/add',create)



module.exports= router 
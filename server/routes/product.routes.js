const express = require('express'); 
var router = require("express").Router();
const product = require("../controllers/product.controller.js");

// Create a new Product
router.post("/", products.create);

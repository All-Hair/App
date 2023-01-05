const express = require("express");
var router = require("express").Router();
const { create, findAll } = require("../controller/product.controller");

// Create a new Product
router.post("/product/", create);
// get all product
router.get("/product/", findAll);

module.exports = router;

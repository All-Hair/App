const express = require("express");
var router = require("express").Router();
const {
  create,
  findAll,
  del,
  update,
} = require("../controller/product.controller");

// Create a new Product
router.post("/", create);
// get all product
router.get("/", findAll);
// delete product by id
router.delete("/delete/:id", del);
// update product by id
router.put("/update/:id", update);

module.exports = router;

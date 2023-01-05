const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
module.exports = {
  // Create and Save a new user
  create: async (req, res) => {
    try {
      // Validate request
      if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }

      // Create a user
      const user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        adress: req.body.adress,
        image: req.body.image,

      };

      // Save user in the database
      await User.create(user);

      res.send("added successfully");
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the User.",
      });
    }
  },

  // get all users

  findAll: async (req, res) => {
    try {
      await User.findAll().then((data) => {
        res.send(data);
      });
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving users.",
      });
    }
  },

  // Delete a user with the specified id in the request
  del: async (req, res) => {
    try {
      const id = req.params.id;
      await User.destroy({
        where: { id: id },
      });
      res.send({
        message: "service was deleted successfully!",
      });
    } catch (error) {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    }
  },
  // update the user

  update: async (req, res) => {
    try {
      const id = req.params.id;

      await User.update(req.body, {
        where: { id: id },
      });
      res.send({
        message: "user was updated successfully.",
      });
    } catch (error) {
      res.status(500).send({
        message: "Error updating user with id=" + id,
      });
    }
  },
};

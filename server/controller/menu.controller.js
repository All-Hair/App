const db = require("../models");
const Menu = db.Menu;
const Op = db.Sequelize.Op;
module.exports = {
  // Create and Save a new menu
  create: async (req, res) => {
    try {
      await Menu.create(req.body);
      res.send("added successfully");
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the menu.",
      });
    }
  },

  // get all menus

  findAll: async (req, res) => {
    try {
      await Menu.findAll().then((data) => {
        res.send(data);
      });
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving users.",
      });
    }
  },

  // Delete a menu with the specified id in the request
  del: async (req, res) => {
    try {
      const id = req.params.id;
      await Menu.destroy({
        where: { id: id },
      });
      res.send({
        message: "service was deleted successfully!",
      });
    } catch (error) {
      res.status(500).send({
        message: "Could not delete menu with id=" + id,
      });
    }
  },
  // update the menu

  update: async (req, res) => {
    try {
      const id = req.params.id;

      await Menu.update(req.body, {
        where: { id: id },
      });
      res.send({
        message: "menu was updated successfully.",
      });
    } catch (error) {
      res.status(500).send({
        message: "Error updating menu with id=" + id,
      });
    }
  },
};

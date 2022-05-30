const express = require("express");
const {
  createCategoria,
  getCategorias,
  updateCategoria,
  deleteCategoria,
} = require("../Controllers/Categoria");
const router = express.Router();

router.route("/categoria").post(createCategoria).get(getCategorias);

router.route("/categoria/:id").put(updateCategoria).delete(deleteCategoria);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} = require("../Controllers/Rubro");

router.route("/Rubro").get(getCategorias).post(createCategoria);

router
  .route("/Rubro/:id")
  .get(getCategoria)
  .put(updateCategoria)
  .delete(deleteCategoria);

module.exports = router;

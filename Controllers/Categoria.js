const Categoria = require("../Models/Categoria");

exports.createCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json({
      success: true,
      message: `Categoria ${req.body.nombre} created`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCategorias = async (req, res, next) => {
  try {
    const categoria = await Categoria.findAll();
    res.status(200).json({
      success: true,
      data: categoria,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.update(req.body, {where : { id : req.params.id}} );
    res.status(200).json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.destroy({where : {id : req.params.id}});
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

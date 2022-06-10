const Cliente = require("../Models/Cliente");

exports.createCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

exports.getClientes = async (req, res, next) => {
  try {
    const cliente = await Cliente.findAll();
    res.status(200).json({
      success: true,
      data: cliente,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

exports.getClient = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    res.status(200).json({
      success: true,
      data: cliente,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateClient = async (req, res, next) => {
  try {
    const cliente = await Cliente.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    const cliente = await Cliente.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

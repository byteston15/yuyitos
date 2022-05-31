const express = require("express");
const {createCliente,deleteClient,getClient, getClientes, updateClient} = require('../Controllers/Cliente');
const router = express.Router();

router.route('/Cliente').get(getClientes).post(createCliente);

router.route('/Cliente/:id').get(getClient).delete(deleteClient).put(updateClient);



module.exports = router;
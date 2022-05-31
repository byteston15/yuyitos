const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("yuyito", "root", "", {dialect : "mysql"});


const Cliente = sequelize.define('Cliente', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    rut : {
        type : DataTypes.INTEGER,
        unique : true,
        validate : {len : [7,8]}
    },
    div : {
        type : DataTypes.CHAR
    },
    nombres : {
        type : DataTypes.STRING,
        validate : {len : [3, 100]}
    },
    apellido_paterno : {
        type : DataTypes.STRING,
        validate : {len : [3, 100]}
    }
});

module.exports = Cliente;

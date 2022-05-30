const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("yuyito", "root","",
{dialect : "mysql"})

const Categoria = sequelize.define('Categoria', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    }
});


module.exports = Categoria;
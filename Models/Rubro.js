const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("yuyito", "root","",{dialect : "mysql"});

const Rubro = sequelize.define('Rubro', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {len : [3, 100]}
    }
});


module.exports = Rubro;
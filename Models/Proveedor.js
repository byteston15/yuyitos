const {Sequelize, DataTypes} = require("sequelize");
const Rubro = require("./Rubro");
const sequelize = new Sequelize("yuyito", "root", "",{dialect : "mysql"} );

const Proveedor = sequelize.define('Proveedor',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey  : true,
    },
    rut : {
        type  : DataTypes.INTEGER,
        unique : true,
        validate : {len : [7, 8]}
    },
    div : {
        type : DataTypes.CHAR
    },
    nombre : {
        type : DataTypes.STRING,
        validate : {len : [3, 100]}
    },
    fk_rubro : {
        type : DataTypes.INTEGER,
        references : {
            model : Rubro,
            key : id
        }
    }
});

Proveedor.hasOne(Rubro);
Rubro.hasMany(Proveedor);

module.exports = Proveedor;
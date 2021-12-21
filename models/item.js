const { DataTypes } = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
    product: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_id: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Item
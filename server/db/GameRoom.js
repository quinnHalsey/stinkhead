const { DataTypes } = require("sequelize");
const db = require("./db");

const GameRoom = db.define("gameRoom", {
  gameStatus: {
    type: DataTypes.ENUM("LOBBY", "ACTIVE", "COMPLETE"),
    defaultValue: "LOBBY",
  },
});

module.exports = GameRoom;

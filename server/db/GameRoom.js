const { DataTypes } = require("sequelize");
const db = require("./db");

const GameRoom = db.define("gameRoom", {
  roomCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: 5,
    },
  },
  gameStatus: {
    type: DataTypes.ENUM("LOBBY", "ACTIVE", "COMPLETE"),
    defaultValue: "LOBBY",
  },
});

module.exports = GameRoom;

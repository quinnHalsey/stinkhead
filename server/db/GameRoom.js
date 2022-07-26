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
  autoPickup: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  gameStatus: {
    type: DataTypes.ENUM("LOBBY", "ACTIVE", "COMPLETE"),
    defaultValue: "LOBBY",
  },
  turnTimeout: {
    type: DataTypes.INTEGER,
    defaultValue: 300,
    allowNull: false,
    validate: {
      max: 600,
      min: 180,
    },
  },
  maxPlayers: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 4,
    validate: {
      max: 4,
      min: 2,
    },
  },
});

module.exports = GameRoom;

const { DataTypes } = require("sequelize");
const db = require("./database");

const Player = db.define("player", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [4, 16],
    },
  },
  computerPlayer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  turnOrder: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 4,
    },
  },
  status: {
    type: DataTypes.ENUM("SHITHEAD", "WINNER", "ACTIVE"),
    defaultValue: "ACTIVE",
  },
  inHand: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
  },
  faceUp: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
  },
  faceDown: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
  },
});

Player.prototype.resetPlayer = () => {
  this.status = "ACTIVE";
  this.inHand = [];
  this.faceUp = [];
  this.faceDown = [];
};

module.exports = Player;

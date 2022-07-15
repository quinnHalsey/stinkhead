const Sequelize = require("sequelize");
const db = require("./database");

const Player = db.define("player", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [4, 16],
    },
  },
  computerPlayer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  turnOrder: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4,
    },
  },
  status: {
    type: Sequelize.ENUM("SHITHEAD", "WINNER", "ACTIVE"),
    defaultValue: "ACTIVE",
  },
  inHand: {
    type: Sequelize.ARRAY,
    defaultValue: [],
  },
  faceUp: {
    type: Sequelize.ARRAY,
    defaultValue: [],
  },
  faceDown: {
    type: Sequelize.ARRAY,
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

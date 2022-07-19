const db = require("./db");
const Player = require("./Player");
const GameRoom = require("./GameRoom");

module.exports = {
  db,
  models: {
    Player,
    GameRoom,
  },
};

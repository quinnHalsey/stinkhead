const db = require("./db");
const Player = require("./Player");
const GameRoom = require("./GameRoom");

Player.belongsTo(GameRoom);
GameRoom.hasMany(Player);

module.exports = {
  db,
  models: {
    Player,
    GameRoom,
  },
};

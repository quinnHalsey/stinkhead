const db = require("./database");
const Player = require("./Player");

module.exports = {
  db,
  models: {
    Player,
  },
};

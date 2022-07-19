const express = require("express");
const { models: GameRoom } = require("../db");
const router = express.Router();

router.post("/gameRoom", async (req, res, next) => {
  const { roomCode, player } = req.body;
  try {
    const newGameRoom = await GameRoom.create({ roomCode });
    newGameRoom.createPlayer(player);
  } catch (err) {
    console.error(err);
  }
});

const express = require("express");
const {
  models: { Player, GameRoom },
} = require("../db/index");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { gameRoom, player } = req.body;
  try {
    const newGameRoom = await GameRoom.create(gameRoom);
    const newPlayer = await newGameRoom.createPlayer(player);

    const newRoomWithPlayer = await GameRoom.findOne({
      where: { roomCode: newGameRoom.roomCode },
      include: { model: Player },
    });

    res.send(newRoomWithPlayer);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

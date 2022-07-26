const express = require("express");
const {
  models: { Player, GameRoom },
} = require("../db/index");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { gameRoom, player } = req.body;
  console.log("inside router.post");
  try {
    const newGameRoom = await GameRoom.create(gameRoom);
    const newPlayer = await Player.create(player);
    console.log(newPlayer.__proto__, "new player proto");
    await newPlayer.setGameRoom(newGameRoom.id);
    const newRoomWithPlayer = await GameRoom.findOne({
      where: { roomCode: newGameRoom.roomCode },
      include: { model: Player },
    });
    console.log(newRoomWithPlayer, "new room in API route");
    res.send(newRoomWithPlayer);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

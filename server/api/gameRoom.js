const express = require("express");
const { models: GameRoom } = require("../db");
const router = express.Router();

router.post("/gameRoom", async (req, res, next) => {
  const { roomCode, player } = req.body;
  console.log("inside router.post");
  try {
    const newGameRoom = await GameRoom.create({ roomCode });
    // newGameRoom.createPlayer(player);
    // const newRoomWithPlayer = await GameRoom.findOne({
    //   where: { roomCode: newGameRoom.roomCode },
    //   include: { model: Player },
    // });
    res.send(newGameRoom);
  } catch (err) {
    console.error(err);
  }
});

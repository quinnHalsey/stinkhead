const {
  db,
  models: { Player, GameRoom },
} = require("./");

const seed = async () => {
  //TODO: remove force:true for production
  await db.sync({ force: true });
  const player = await Player.create({ username: "halsey" });
  const room = await GameRoom.create({ roomCode: "XE45K" });
  await room.addPlayer(player);
  // await Promise.all([
  //   Player.create({ username: "cody" }),
  //   Player.create({
  //     username: "murphy",
  //   }),
  //   Player.create({
  //     username: "GraceHopper",
  //   }),
  // ]);
  console.log("DB synced!");
};

const runSeed = async () => {
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
};

if (module === require.main) {
  runSeed();
}

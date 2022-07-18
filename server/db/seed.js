const db = require("./db");
const Player = require("./Player");

const seed = async () => {
  //TODO: remove force:true for production
  await db.sync({ force: true });
  await Promise.all([
    Player.create({ username: "cody" }),
    Player.create({
      username: "murphy",
    }),
    Player.create({
      username: "GraceHopper",
    }),
  ]);
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

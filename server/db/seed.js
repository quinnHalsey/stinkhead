const db = require("./database");

const seed = async () => {
  await db.sync({ force: true });
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

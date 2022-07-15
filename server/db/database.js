const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

console.log(chalk.yellow(`Opening database connection to stinkhead`));

const db = new Sequelize(`postgres://localhost:5432/stinkhead`, {
  logging: false,
});

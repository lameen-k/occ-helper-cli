const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const uni = require("./uniLog");
const { envFile } = require("./templates");

const createEnv = fileData => {
  console.log(uni.arrow + " Writing environment variables.");
  let filePath = path.join(process.cwd(), ".env");

  fs.writeFileSync(filePath, envFile(fileData));
  console.log(chalk.green(uni.success + " .env created."));
};

module.exports = { createEnv };

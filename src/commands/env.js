const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const uni = require("../uniLog");
const inquirer = require("inquirer");

const { showStoredEnv, checkEnv } = require("./askr");
const { initNew } = require("./init");

const envCmd = () => {
  let filePath = path.join(process.cwd(), ".env");
  if (fs.existsSync(filePath)) {
    showStoredEnv();
  } else {
    console.log(uni.arrow + " No environment (.env) file found.");
    inquirer
      .prompt(checkEnv)
      .then(answers => (answers.addEnv == "yes" ? initNew() : null));
  }
};

module.exports = envCmd;

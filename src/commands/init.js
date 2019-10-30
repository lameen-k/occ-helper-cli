const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");
const envy = require("dotenv").config();

const uni = require("../uniLog");
const { initQ, initNewQ, showStoredEnv } = require("./askr");
const { createEnv } = require("../creator");
const dcu = require("./dcu");

/*
 * Init : First called on "init" command
 * - check if .env file does exist
 * - if not, then launch the init process (initNew)
 */
const init = (redo = false) => {
  let filePath = path.join(process.cwd(), ".env");
  if (fs.existsSync(filePath)) {
    !redo
      ? console.log(chalk.green(uni.arrow + " Environment (.env) file found."))
      : null;

    inquirer.prompt(initNewQ).then(answers => {
      let { overwrite } = answers;

      overwrite == "yes" ? initNew() : null;

      if (overwrite == "view stored credentials") {
        console.clear();
        showStoredEnv();
        init("redo");
      }
    });
  } else {
    // console.log(uni.arrow + " No environment (.env) file found.");
    initNew();
  }
};

/*
 * Init process : Store env credentials in .env and grabb widgets
 */
const initNew = () => {
  inquirer
    .prompt(initQ)
    .then(async answers => {
      console.log(chalk.blue(`\n🚀   Initiating OCC Workspace `));
      let { envPath, appKey, saveNgrab } = answers;
      let fileData = { envPath: envPath.trim(), appKey: appKey.trim() };
      await createEnv(fileData);

      return answers;
    })
    .then(answers => {
      // console.log(answers.envPath);
      if (answers.saveNgrab == "yes") {
        dcu.grab({ clean: true, keep: false });
      }
    });
};

module.exports = { init, initNew };

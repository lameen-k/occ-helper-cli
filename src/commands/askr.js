const chalk = require("chalk");

const initQ = [
  {
    type: "input",
    name: "envPath",
    message: "What's the OCC admin url?",
    validate: input => {
      return true;
    }
  },
  {
    type: "input",
    name: "appKey",
    message: "What's your App Key?"
  },
  {
    type: "list",
    name: "saveNgrab",
    message: "Grab Widgets",
    choices: ["yes", "no"]
  }
];

const initNewQ = [
  {
    type: "list",
    name: "overwrite",
    message: "Do you want to overwrite the existance environment credentials?",
    choices: ["no", "yes", "view stored credentials"]
  }
];

const checkEnv = [
  {
    type: "list",
    name: "addEnv",
    message: "Do you want to initiate an OCC workspace",
    choices: ["no", "yes"]
  }
];

const showStoredEnv = () => {
  console.log(chalk.grey("View environment variables"));
  console.log(chalk.green("Environment path: ") + process.env.env_path);
  console.log(chalk.green("Application Key: ") + process.env.app_key + "\n");
};

module.exports = { initQ, initNewQ, showStoredEnv, checkEnv };

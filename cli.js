#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { initializeApp } = require("./initialize");
const generateUserToken = require("./generateToken");
const updatePhone = require("./updatePhone");
const updateEmail = require("./updateEmail");
const searchByUsername = require("./searchUsername");
const searchByEmail = require("./searchEmail");
const searchByPhone = require("./searchPhone");
const countTokens = require("./countToken");
const updateConfiguration = require("./updateConfig")
const resetConfiguration = require("./resetConfig")
const getStatus = require("./status");

const command = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const username = process.argv[4];
const usernameupd = process.argv[5]

let isInitialized = true;
let isConfigured = true;

switch (command) {
  case "--help":
    displayHelp();
    break;
  case "init":
    handleInitCommands(option1);
    break;
  case "config":
    handleConfigCommands(option1, option2);
    break;
  case "token":
    handleTokenCommands(command, option1, option2, username);
    //console.log("Command: token");
    //console.log("Option1:", option1);
    //console.log("Option2:", option2);
    //console.log("Username:", username);
    //Debugging Statments
    break;
  case "status":
    getStatus(isInitialized, isConfigured);
    break;
  default:
    console.log("Invalid command. Use 'myapp --help' for available commands.");
}

function displayHelp() {
    console.log("Usage:");
    console.log("myapp --help");
    console.log("myapp init help");
    console.log("myapp init install");
    console.log("myapp config help");
    console.log("myapp config show");
    console.log("myapp config -set \"<configOption> <configValue>\"");
    console.log("myapp config reset");
    console.log("myapp token help");
    console.log("myapp token count");
    console.log("myapp token new <username>");
    console.log("myapp token upd p <username> <phone>");
    console.log("myapp token upd e <username> <email>");
    console.log("myapp token search u <username>");
    console.log("myapp token search e <email>");
    console.log("myapp token search p <phone>");
}

function handleInitCommands(option) {
  if (option === "help") {
    console.log("myapp init install");
  } else if (option === "install") {
    initializeApp();
  } else {
    console.log("Invalid init command. Use 'myapp init help' for available options.");
  }
}

function handleConfigCommands(action, value) {
    switch (action) {
      case "help":
        console.log("myapp config show");
        console.log("myapp config -set \"<configOption> <configValue>\"");
        console.log("myapp config reset");
        break;
      case "show":
        require("./viewConfig")();
        break;
      case "-set":
        const [configOption, configValue] = value.split(" ");
        if (configOption && configValue) {
          updateConfiguration(configOption, configValue);
          console.log(`Configuration option '${configOption}' set to '${configValue}'.`);
        } else {
          console.log("Invalid usage. Please provide a valid option and value.");
        }
        break;
      case "reset":
        resetConfiguration();
        console.log("Configuration reset to default state.");
        break;
      default:
        console.log("Invalid config command. Use 'myapp config help' for available options.");
    }
  }

function handleTokenCommands(command, action, option, username) {

  const updateType = process.argv[4]; // Get the update type from process.argv[4]

  // Get the phone number or email address based on the update type
  const updateValue = process.argv[6];

  switch (action) {
    case "help":
      console.log("myapp token count");
      console.log("myapp token new <username>");
      console.log("myapp token upd p <username> <phone>");
      console.log("myapp token upd e <username> <email>");
      console.log("myapp token search u <username>");
      console.log("myapp token search e <email>");
      console.log("myapp token search p <phone>");
      break;
    case "count":
      countTokens();
      break;
    case "new":
      if (username) {
        generateUserToken(username);
      } else {
        console.log("Please provide a username.");
      }
      break;
      case "upd":
      if (updateType === "p" && usernameupd && updateValue) {
        updatePhone(usernameupd, updateValue);
      } else if (updateType === "e" && usernameupd && updateValue) {
        updateEmail(usernameupd, updateValue);
      } else {
        console.log("Invalid usage. Please provide a valid option and value.");
      }
      break;
    case "search":
      if (option === "u" && usernameupd) {
        searchByUsername(usernameupd);
      } else if (option === "e" && usernameupd) {
        searchByEmail(usernameupd);
      } else if (option === "p" && usernameupd) {
        searchByPhone(usernameupd);
      } else {
        console.log("Invalid usage. Please provide a valid option and value.");
      }
      break;
    default:
      console.log("Invalid token command. Use 'myapp token help' for available options.");
  }
}

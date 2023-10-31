const path = require("path");
const fs = require("fs");

function viewConfiguration() {
  const configPath = path.join(__dirname, "app", "config", "default.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  console.log("Current Configuration:");
  console.log(config);
}

module.exports = viewConfiguration;

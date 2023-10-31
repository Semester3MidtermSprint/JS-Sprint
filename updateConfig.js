const path = require("path");
const fs = require("fs");

function updateConfiguration(option, value) {
  const configPath = path.join(__dirname, "app", "config", "default.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  config[option] = value;

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

module.exports = updateConfiguration;

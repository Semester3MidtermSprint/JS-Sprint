const path = require("path");
const fs = require("fs");

function resetConfiguration() {
  const configDirectory = path.join(__dirname, "app", "config");
  const configPath = path.join(configDirectory, "default.json");

  // Create the config directory if it doesn't exist
  if (!fs.existsSync(configDirectory)) {
    fs.mkdirSync(configDirectory, { recursive: true });
  }

  // Default configuration object
  const defaultConfig = {
    appName: "MyApp",
    Version: "1.0.0",
    // Add more default configuration properties as needed
  };

  // Write the default configuration to default.json
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
}

module.exports = resetConfiguration;

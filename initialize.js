// Importing necessary modules
const fs = require("fs");
const path = require("path");

// Function to initialize the application
function initializeApp() {
  const appDirectory = path.join(__dirname, "app");

  // Check if the directory already exists
  if (fs.existsSync(appDirectory)) {
    console.log("Application directory already exists.");
    return;
  }

  // Creating the required directory structure
  fs.mkdirSync(appDirectory);
  fs.mkdirSync(path.join(appDirectory, "config"));
  fs.mkdirSync(path.join(appDirectory, "help"));

  // Adding default configuration and help files
  fs.writeFileSync(
    path.join(appDirectory, "config", "default.json"),
    JSON.stringify({})
  );
  fs.writeFileSync(
    path.join(appDirectory, "help", "help.txt"),
    "This is the help file."
  );

  console.log("Application initialized successfully.");
}

module.exports = { initializeApp };

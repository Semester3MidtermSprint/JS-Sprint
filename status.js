// status.js



function getStatus(isInitialized, isConfigured) {
  console.log("Initialization and Configuration Status:");

  if (isInitialized) {
    console.log("Application is initialized");
  } else {
    console.log("Application is not initialized");
  }

  if (isConfigured) {
    console.log("Application is configured");
  } else {
    console.log("Application is not configured");
  }
}

module.exports = getStatus;

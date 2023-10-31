const fs = require("fs");
const path = require("path");

function searchByUsername(username) {
  // Logic to search for a token by username
  const tokensPath = path.join(__dirname, "app", "tokens.json");
  if (fs.existsSync(tokensPath)) {
    const existingTokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));
    if (existingTokens[username]) {
      const tokenObject = existingTokens[username];
      console.log(`Token for user '${username}': ${JSON.stringify(tokenObject)}`);
    } else {
      console.log(`User '${username}' not found.`);
    }
  } else {
    console.log("Tokens file not found.");
  }
}

module.exports = searchByUsername;

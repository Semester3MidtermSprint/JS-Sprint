const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

function generateUserToken(username) {
  if (!username) {
    console.log("Please provide a username to generate a token.");
    return null;
  }

  const token = uuid.v4(); // Generate a random UUID as the token

  const tokensPath = path.join(__dirname, "app", "tokens.json");
  const existingTokens = fs.existsSync(tokensPath)
    ? JSON.parse(fs.readFileSync(tokensPath, "utf8"))
    : {};

  existingTokens[username] = {
    token: token,
  };

  fs.writeFileSync(tokensPath, JSON.stringify(existingTokens, null, 2));

  console.log(`User Token for ${username}: ${token}`);
  return token; // Return the generated token
}

module.exports = generateUserToken;

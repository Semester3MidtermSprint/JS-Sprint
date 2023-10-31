const fs = require("fs");
const path = require("path");

function updateEmail(username, newEmail) {
  const tokensPath = path.join(__dirname, "app", "tokens.json");

  if (fs.existsSync(tokensPath)) {
    const existingTokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));
    if (!existingTokens[username]) {
      console.log(`User '${username}' not found.`);
      return;
    }

    existingTokens[username].email = newEmail;
    fs.writeFileSync(tokensPath, JSON.stringify(existingTokens, null, 2));
    console.log(`Email address updated for user '${username}' to '${newEmail}'.`);
  } else {
    console.log("Tokens file not found.");
  }
}

module.exports = updateEmail;

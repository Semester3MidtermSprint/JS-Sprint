const fs = require("fs");
const path = require("path");

function updatePhone(username, newPhone) {
  const tokensPath = path.join(__dirname, "app", "tokens.json");

  if (fs.existsSync(tokensPath)) {
    const existingTokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));
    if (!existingTokens[username]) {
      console.log(`User '${username}' not found.`);
      return;
    }

    existingTokens[username].phone = newPhone;
    fs.writeFileSync(tokensPath, JSON.stringify(existingTokens, null, 2));
    console.log(`Phone number updated for user '${username}' to '${newPhone}'.`);
  } else {
    console.log("Tokens file not found.");
  }
}

module.exports = updatePhone;

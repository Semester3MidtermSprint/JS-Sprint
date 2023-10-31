const fs = require("fs");
const path = require("path");

function countTokens() {
  const tokensPath = path.join(__dirname, "app", "tokens.json");

  // Check if the tokens file exists
  if (fs.existsSync(tokensPath)) {
    const tokensData = fs.readFileSync(tokensPath, "utf8");
    const tokens = JSON.parse(tokensData);

    const numberOfTokens = Object.keys(tokens).length;
    console.log(`Number of tokens: ${numberOfTokens}`);
  } else {
    console.log("No tokens found. Please create tokens using 'myapp token new <username>'.");
  }
}

module.exports = countTokens;

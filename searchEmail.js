const fs = require("fs");
const path = require("path");

function searchByEmail(email) {
  const tokensPath = path.join(__dirname, "app", "tokens.json");

  if (fs.existsSync(tokensPath)) {
    const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

    const foundUsers = Object.entries(tokens).filter(([username, tokenObject]) => {
      return tokenObject.email === email;
    });

    if (foundUsers.length > 0) {
      console.log(`Search results for email '${email}':`);
      foundUsers.forEach(([username, tokenObject]) => {
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Token: ${tokenObject.token}`);
        console.log("--------------------");
      });
    } else {
      console.log(`Email '${email}' not found.`);
    }
  } else {
    console.log("Tokens file not found.");
  }
}

module.exports = searchByEmail;

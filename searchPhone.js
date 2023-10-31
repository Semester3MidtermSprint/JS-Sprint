const fs = require("fs");
const path = require("path");

function searchByPhone(phone) {
  const tokensPath = path.join(__dirname, "app", "tokens.json");

  if (fs.existsSync(tokensPath)) {
    const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

    const foundUsers = Object.entries(tokens).filter(([username, tokenObject]) => {
      return tokenObject.phone === phone;
    });

    if (foundUsers.length > 0) {
      console.log(`Search results for phone number '${phone}':`);
      foundUsers.forEach(([username, tokenObject]) => {
        console.log(`Username: ${username}`);
        console.log(`Phone Number: ${phone}`);
        console.log(`Token: ${tokenObject.token}`);
        console.log("--------------------");
      });
    } else {
      console.log(`Phone number '${phone}' not found.`);
    }
  } else {
    console.log("Tokens file not found.");
  }
}

module.exports = searchByPhone;

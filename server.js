const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/generateToken", (req, res) => {
  const { username } = req.body;

  if (!username) {
    res.status(400).json({ error: "Please provide a username." });
    return;
  }

  const tokensPath = path.join(__dirname, "app", "tokens.json");
  const existingTokens = fs.existsSync(tokensPath)
    ? JSON.parse(fs.readFileSync(tokensPath, "utf8"))
    : {};

  if (existingTokens[username]) {
    // User already exists, return the existing token
    res.json({ token: existingTokens[username].token });
  } else {
    // Generate a new token and save it to tokens.json
    const newToken = uuid.v4();
    existingTokens[username] = { token: newToken };
    fs.writeFileSync(tokensPath, JSON.stringify(existingTokens, null, 2));

    // Return the newly generated token
    res.json({ token: newToken });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = "secretkey";

app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET);
  res.json({ token });
});

app.get("/protected", (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);

  try {
    const data = jwt.verify(token, SECRET);
    res.json({ message: "Protected Data", user: data });
  } catch {
    res.sendStatus(403);
  }
});

app.listen(5000);

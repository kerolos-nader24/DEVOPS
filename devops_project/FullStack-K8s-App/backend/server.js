const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const USERS = [
  { username: "admin", password: "1234" },
  { username: "user", password: "pass" }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if(user){
    res.json({ success: true, token: "secure-token" });
  } else {
    res.json({ success: false });
  }
});

app.get('/data', (req, res) => {
  const token = req.headers.authorization;
  if(token === "secure-token"){
    res.json({ message: "Welcome! You are logged in." });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running. Use POST /login.');
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

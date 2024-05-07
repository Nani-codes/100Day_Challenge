const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).send({ message: "Admin authentication failed  " });
  }
};

const userAuthentication = (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    req.user = user;
    next();
  } else {
    res.status(403).send({ message: "User authentication failed  " });
  }
};

app.listen(req.res){
    res.send(`Running at ${port}`)
}
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
let ADMINS = []
let USERS = []
let COURSES = []
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

app.post("/admin/signup",(req,res)=>{
  const admin = req.body;
  const exist = ADMINS.find(a=> a.username === admin.username)
  if (exist) {
    res.status(403).json({messaage:"Admin already exists"})
  } else {
    ADMINS.push(admin);
    res.json({messaage: " Admin created Successfully"})
  }


  res.send('HELLO')
})
app.post("/admin/login",adminAuthentication,(req,res)=>{

  res.json({messaage:"Login Successfull"})
})
app.post("/admin/courses",(req,res)=>{

  res.send('HELLO')
})

app.put("/admin/courses/:courseId",(req,res)=>{

  res.send('HELLO')
})

app.get("/admin/courses",(req,res)=>{
  res.send('HELLO')
})

app.get("/",(req,res)=>{
  res.send('HELLO')
})

app.listen(port, () => {
  console.log(`port is on ${port}`);
});

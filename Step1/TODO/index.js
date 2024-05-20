const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")
const cors = require("cors")
const path  = require("path")
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())
// let todos = [];

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
  return -1;
}

function removeIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 100000),
    title: req.body.title,
    description: req.body.description,
  };
  // todos.push(newTodo);
  // res.status(201).json(newTodo)

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) {
        throw err;
      }
      res.status(201).json(newTodo);
    });
  });
});

app.get("/todos/:title", (req, res) => {
  // const todoIndex = findIndex(todos, (req.params.title));
  // if (todoIndex == -1) {
  //     res.status(404).send()
  // } else {
  //     const result = todos[todoIndex]
  //     res.status(200).send(result)
  // }
});

app.get("/todos", (req, res) => {
  // res.json(todos);
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data));
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    
    if (err) {
      throw error;
    }
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex == -1) {
      res.status(404).send();
    } else {
      todos = removeIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err)=>{
        res.status(200).send();
      })
      
    }
  });
  
});

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "index.html"))
})

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(port, () => {
  console.log(`port is on ${port}`);
});

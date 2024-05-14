import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTodos(data);
      });
    });
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App;

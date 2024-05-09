import React, { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to Gym",
      id: "1",
    },
    {
      title: "Swim",
      description: "Go for a swim",
      id: "2",
    },
  ]);

  return (
    <>
      <h1>HELLO</h1>

      {todos.map((todo) => {
        return <div key={todo.id}>
          <Todo  title = {todo.title} description={todo.description}></Todo>
        </div>;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title} <br />
      {props.description}
    </div>
  );
}

export default App;

import * as React from "react";
import Button from "@mui/material/Button";
import {useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(Math.random())
  
  }, [])
  

  
  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  function handleClick (){
    alert ("Button Clicked!");
  }

  return (
    <>
      <h2>React Core Concept Part-2</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;

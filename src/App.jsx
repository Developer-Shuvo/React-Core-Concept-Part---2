import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Post from "./Post";

function App() {
  // Normal function to handle button click
  function handleClick() {
    alert("Button Clicked!");
  }

  // Arrow function to handle button click
  const handleClick2 = () => {
    alert("Button Clicked with Arrow Function!");
  };

  const buttonStyle = {
    marginRight: "16px",
    padding: "10px 20px",
    backgroundColor: "yellow",
    color: "black",
    border: "2px solid green",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <>
      <h2>React Core Concept Part-2</h2>

      <div>
        <button style={buttonStyle} onClick={handleClick}>
          Normal Function Button
        </button>
        <button
          style={{ ...buttonStyle, marginRight: 0 }}
          onClick={handleClick2}
        >
          Arrow Function Button
        </button>
      </div>

      <Counter></Counter>
      <div>
        <h2 style={{ textDecoration: "underline", color:"orange" }}>React Core Concept Recap</h2>
        <ol>
          <li>Components</li>
          <li>jsx</li>
          <li>Porps</li>
          <li>EventHandler</li>
          <li>State Management</li>
          <li>Load Data/ Use Effect</li>
        </ol>
        <hr />
      </div>
      <Post></Post>
    </>
  );
}

export default App;

import './App.css';
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
    
    <Weather />
     <footer>
      this project was created by <a href="x"> Minna K. Randolph</a> and is open sourced
     <a href="https://github.com/minnakrandolph/4_6_24.react.weather.app" 
     target="_blank"
     className="">
      Github repository</a> 
      </footer>
      </div>
    </div>);
}

export default App;

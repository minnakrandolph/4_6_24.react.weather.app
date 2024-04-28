import './App.css';
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
    
    <Weather defaultCity="New York"/>
    <div className="d-flex justify-content-center">
     <footer>
      This project was created by  <a href="https://github.com/minnakrandolph/4_6_24.react.weather.app" rel="noreferrer noopener"
     className="">  Minna K. Randolph </a>  and is open sourced  
     
      </footer>
      </div>
      </div>
    </div>);
}

export default App;

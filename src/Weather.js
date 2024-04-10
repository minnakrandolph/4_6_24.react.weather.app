import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <form id="search-form mb-3">
            <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            />

            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" 
            />        
            </div>
            </div>
            </form>
        <h1>New York</h1> 
       <ul>
        <li>Sunday 08:00</li>
        <li>Partly Sunny</li>
       </ul>
       <div className="row">
        <div className="col-6">
            <div className="clearfix">
       <img 
       src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
       alt="mostly sunny"
       className="float-left" 
       />
      <span className="temperature">6</span>
      <span className="unit">°C</span>
        
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Percipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13km/h</li>
            </ul>
        </div>
       </div>
        </div>);
    
}
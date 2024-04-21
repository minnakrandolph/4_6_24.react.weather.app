import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function Weather(props) {
    const [weatherData, setWeatherData]  = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });  
    }

    if (weatherData.ready) {
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
                <h1>{weatherData.city}</h1> 
               <ul>
                <li><FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
               </ul>
               <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                        <WeatherIcon code={weatherData.icon}
                         />
                        </div>
            <div className="float-left">
                <WeatherTemperature celsius={weatherData.temperature} />
                </div>
             </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percipitation: {weatherData.percipitation}..%</li>
                        <li>Humidity: {weatherData.humidity}..</li>
                        <li>Wind: {weatherData.wind}km/h..</li>
                    </ul>
                </div>
               </div>
                
              );    
    } else {
        const apiKey ="5aac6d0188c6f17d6d2bbe6591b6fef0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=celsius`;
        axios.get(apiUrl).then(handleResponse);
    }
}

    
    

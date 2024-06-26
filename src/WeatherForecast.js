import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);

    // if the coordinates change
    // set loaded to false 


    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
    console.log(forecast);
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                    return (
                        <div className="col" key={index}> 
                    <WeatherForecastDay data={dailyForecast} />
                    </div>
                    ); 
                } else {
                    return null;
                    }
                   })}
               </div>
            </div>
            ); 
} else {
    let apiKey = "3499ef150985eccadd080ff408a018df";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(handleResponse);


return null;

}
}
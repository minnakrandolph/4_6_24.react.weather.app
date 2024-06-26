import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
   

    export default function WeatherIcon(props) {
      const codeMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_DAY",
      "03d": "SCATTERED_CLOUDS",
      "03n": "SCATTERED_CLOUDS",
      "04d": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG"
      };

        return (
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="orange"
        size={props.size}
        animate={true}
        />
    );
  }

    
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
   

    export default function WeatherIcon(props) {
      console.log(props.code);
      const codeMapping = {
      "01d": "CLEAR_SKY",
      "01n": "CLEAR_SKY",
      "02d": "FEW_CLOUDS",
      "02n": "FEW_CLOUDS",
      "03d": "SCATTERED_CLOUDS",
      "03n": "SCATTERED_CLOUDS",
      "04d": "BROKEN_CLOUDS",
      "09d": "SHOWER_RAIN",
      "09n": "SHOWER_RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "THUNDERSTORM",
      "11n": "THUNDERSTORM",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "MIST",
      "50n": "MIST"
      };

        return (
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="red"
        size={52}
        animate={true}
        />
    );
  }

    
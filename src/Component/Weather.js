import React from "react";
import "./Weather.css";
import WeatherApp from "./WeatherApp"
import Loader from "./Loader.js"
import Error from "./Error.js"

const Weather = props => (
    <div className="weather">
      { props.status && <WeatherApp
            city={props.city}
            country={props.country}
            date={props.date}
            temp={props.temperature}
            weather={props.weather}
            wind={props.wind}
            humidity={props.humidity}
            pressure={props.pressure}
            max={props.max}
            min={props.min}
            sunrise={props.sunrise}
            sunset={props.sunset}
        /> 
      }
      {
          props.click &&
          <Loader />
      }
      {
          props.error && <Error />
      }
  </div>
);

export default Weather;

// Importing the dependencied for the Component
import React from "react";
import "./Weather.css";
import WeatherApp from "./WeatherApp";
import Loader from "./Loader.js";
import Error from "./Error.js";

/*
  This function return the JSX for
  The Weather component in App Component
*/
const Weather = props => (
  <div className="weather">
    {props.status && props.error !== 404 && (
      <WeatherApp
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
    )}
    {props.loader && <Loader />} {/* Placing the Loader Component */}
    {props.error && <Error />} {/* Placing the Error Component */}
  </div>
);

// Exporting the Weather Component to the App Component
export default Weather;

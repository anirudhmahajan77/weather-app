import React from "react";
import "./Weather.css";

const Weather = props => (
  <div>
    <div className="weather">
      {props.city && props.country && props.date && (
        <p className="key">
          Location:
          <span className="weather__value">
            {props.city}, {props.country}, {props.date}
          </span>
        </p>
      )}

      {props.temperature && (
        <p className="key">
          Temperature:
          <span className="weather__value"> {props.temperature} </span>
        </p>
      )}
      {props.weather && (
        <p className="key">
          Weather:
          <span className="weather__value"> {props.weather} </span>
        </p>
      )}
      {props.wind && (
        <p className="key">
          Wind:
          <span className="weather__value"> {props.wind} </span>
        </p>
      )}

      {props.humidity && (
        <p className="key">
          Humidity:
          <span className="weather__value"> {props.humidity} </span>
        </p>
      )}
      {props.pressure && (
        <p className="key">
          Pressure:
          <span className="weather__value"> {props.pressure} </span>
        </p>
      )}
      {props.max && (
        <p className="key">
          Max Temp:
          <span className="weather__value"> {props.max} </span>
        </p>
      )}
      {props.max && (
        <p className="key">
          Min Temp:
          <span className="weather__value"> {props.min} </span>
        </p>
      )}
      {props.weather && (
        <p className="key">
          Sunrise:
          <span className="weather__value"> {props.sunrise} </span>
        </p>
      )}
      {props.wind && (
        <p className="weather__key">
          Sunset:
          <span className="weather__value"> {props.sunset} </span>
        </p>
      )}
    </div>
  </div>
);

export default Weather;

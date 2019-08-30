import React from "react";

import Header from "./Component/Header.js";
import Form from "./Component/Form.js";
import Weather from "./Component/Weather.js";
import "./App.css";

const KEY = "42a1422705af002140589710b2ecc1f5";

class App extends React.Component {
  state = {
    temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        weather: undefined,
        min: undefined,
        max: undefined,
        sunrise: undefined,
        status: 0,
        date: undefined,
        sunset: undefined,
        wind: undefined,
        error: "City Name Not Found"
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (data.code !== 404) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        satus: 1,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        min: data.main.temp_min,
        max: data.main.temp_max,
        sunset: data.sys.sunset,
        sunrise: data.sys.sunrise,
        date: data.timezone,
        wind: data.wind.speed,
        weather: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        weather: undefined,
        min: undefined,
        max: undefined,
        sunrise: undefined,
        status: 0,
        date: undefined,
        sunset: undefined,
        wind: undefined,
        error: "City Name Not Found"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Header />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    weather={this.state.weather}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    date={this.state.date}
                    min={this.state.min}
                    wind={this.state.wind}
                    max={this.state.max}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

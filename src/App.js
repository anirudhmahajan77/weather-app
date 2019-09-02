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
    click: undefined,
    max: undefined,
    sunrise: undefined,
    status: false,
    click: false,
    date: undefined,
    sunset: undefined,
    wind: undefined,
    error: false
  };
  getWeather = async e => {
    e.preventDefault();
    this.setState({ click: true });
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    );
    const data = await api_call.json();
    console.log(data);

    if (data.cod !== 404) {
      let sunrise = data.sys.sunrise;
      let sunriseObj = new Date(sunrise);
      let sunriseUTC = sunriseObj.toUTCString();
      let sunriseTime = sunriseUTC.slice(-11, -4);

      let sunset = data.sys.sunset;
      let sunsetObj = new Date(sunset);
      let sunsetUTC = sunsetObj.toUTCString();
      let sunsetTime = sunsetUTC.slice(-11, -4);

      let currentDate = new Date();
      currentDate = currentDate.toDateString();

      const originalWeather = data.weather[0].description;
      const capitalizedWeather = originalWeather.replace(/^\w/, c =>
        c.toUpperCase()
      );

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        status: true,
        click: false,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        min: data.main.temp_min,
        max: data.main.temp_max,
        sunset: sunsetTime,
        sunrise: sunriseTime,
        date: currentDate,
        wind: data.wind.speed,
        weather: capitalizedWeather,
        error: false
      });
    } else {
      this.setState({
        click: false,
        status: false,
        error: true
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
                    status={this.state.status}
                    click={this.props.click}
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

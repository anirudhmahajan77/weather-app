// Imported the dependencies for App component
import React from "react";
import Header from "./Component/Header.js"; // Importing the Header component
import Form from "./Component/Form.js"; // Imported the main Form component
import Weather from "./Component/Weather.js"; // Imported the Weather content component
import "./App.css";

// API KEY of the host account for data fetching
const KEY = "42a1422705af002140589710b2ecc1f5";

// The main App Component Class
class App extends React.Component {
  // Setting Up State
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
    loader: false,
    date: undefined,
    sunset: undefined,
    wind: undefined,
    error: false
  };

  // Async function for data retrieval
  getWeather = async e => {
    e.preventDefault();
    /*
     Setting up the Loader and Error
     component Visibility Configurations
    */
    this.setState({ 
      loader: true,
      error: false
    });

    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    ); // Making the call

    const data = await api_call.json(); // Casting raw data into JSON Format

    // Implementing the coditional rendering for components
    if (data.message !== "city not found") {
      /*
       Logic for data conversion of the timestamp to
       a readable Date and Time format
      */
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

      // Conversion of Temperature of Kevin Format to celcius
      let temp = parseInt(data.main.temp - 273.15);
      let minimum = parseInt(data.main.temp_min - 273.15);
      let maximum = parseInt(data.main.temp_max - 273.15);

      /* 
       When Everything Goes right 
       The state will be update with the new values
      */
      this.setState({
        temperature: temp,
        city: data.name,
        status: true,
        loader: false,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        min: minimum,
        max: maximum,
        sunset: sunsetTime,
        sunrise: sunriseTime,
        date: currentDate,
        wind: data.wind.speed,
        weather: capitalizedWeather,
        error: false
      });
    } else {
      // Setting up State values for Error situation
      this.setState({
        loader: false,
        status: false,
        error: true
      });
    }
  };

  // Render function for rendering the whole App Component
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  {/* Placing the Header Component */}
                  <Header />
                </div>
                <div className="col-xs-7 form-container">
                  {/* Placing the Form Component */}
                  <Form getWeather={this.getWeather} />

                  {/* Placing the Weather Component */}
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
                    loader={this.state.loader}
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

// Exporting the App Component to Index.js
export default App;

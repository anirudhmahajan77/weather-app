import React from "react"
import Comment from "./Comment.js"

class WeatherApp extends React.Component{
    render(){ 
      return(
        <div>
    <div className="Weathercontainer">
      <div id="one">{this.props.city}, {this.props.country}, {this.props.date}</div>
      <div id="two">{this.props.temp}°C</div>
      <div id="three">Weather: <span className="data">{this.props.weather}</span></div>
      <div id="four">Wind: <span className="data">{this.props.wind} km/hr</span></div>
      <div id="five"></div>
      <div id="six">Humidity: <span className="data">{this.props.humidity}%</span></div>
      <div id="seven">Pressure: <span className="data">{this.props.pressure} pa</span></div>
      <div id="eight"></div>
      <div id="nine">Max Temp: <span className="data">{[" " + this.props.max]}°C</span></div>
      <div id="ten">Min Temp: <span className="data">{this.props.min}°C</span></div>
      <div id="eleven"></div>
      <div id="telev">Sunrise: <span className="data">{this.props.sunrise}</span></div>
      <div id="thirteen">Sunset: <span className="data">{this.props.sunset}</span></div>
      <div id="fourteen"></div>
      </div>
      <Comment />
      </div>
      )
    }
}


export default WeatherApp;


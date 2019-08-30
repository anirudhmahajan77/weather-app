import React from "react";
import "./Form.css";
//import Comment from "./Comment.js"

const Form = props => (
	<div className="holder" onSubmit={props.getWeather}>
        <form className="form-body">
          <input
            type="search"
            name="city"
            className="search-bar"
            placeholder="Enter City Name..."
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
);

export default Form;



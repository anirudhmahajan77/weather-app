// Importing the dependencies of the Component
import React from "react";
import "./Form.css";

/*
  This function returns the 
  JSX for the Form Component
*/
const Form = props => (
  <div className="holder" onSubmit={props.getWeather}>
    <form className="form-body">
      <input
        type="search"
        name="city"
        className="search-bar"
        placeholder="Enter City Name..."
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  </div>
);

// Exporting the Component to App Component
export default Form;

// Importing the Dependencies for the Component
import React from "react";
import "./Loader.css";

class Loader extends React.Component {
  constructor() {
    super();
  }

  // Rendering the Loader Component
  render() {
    return <div id="ConditionHolder">Searching City Name...</div>;
  }
}

// Exporting the Loader Component to the Weather Component
export default Loader;

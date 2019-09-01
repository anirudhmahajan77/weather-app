import React from "react"
import "./Loader.css"

class Loader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            
            <div id="ConditionHolder">
                Searching City Name...
            </div>
            
        )
    }
}

export default Loader;
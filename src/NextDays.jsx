import React from "react";
import getDateDay from "./UtilityFonctions";
function NextDays(props) {

    if (props.isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="card text-center m-3">
        <div className="card-body">
            <div className ="card-content">{getDateDay(props.time)}</div>
            <div className ="card-content">XX</div>
            <div className ="card-content">{props.temperature_max} {props.tempUnit}</div>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
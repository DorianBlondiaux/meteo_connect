import React from "react";
import getDateDay from "./UtilityFonctions";
function NextDays(props) {

    if (props.isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="card text-center m-3">
        <h5 className="card-header"></h5>
        <div className="card-body">
            <div className="card-content">{getDateDay(props.time)}</div>
            <div className="card-content">logo</div>
            <div className="card-content">{props.temperature_max} {props.tempUnit}</div>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
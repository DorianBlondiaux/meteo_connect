import React from "react";
import getDateDay from "./Utility/GetDateDay";
import getWeatherIcone from "./Utility/GetWeatherIcone";
function NextDays(props) {
  
    return (
      <div className="card text-center m-3">
        <div className="card-body hoverbody">
            <div className ="card-content">{getDateDay(props.time)}</div>
            <div className ="card-content">{getWeatherIcone(props.weatherCode)}</div>
            <div className ="card-content">{props.temperature_max} {props.tempUnit}</div>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
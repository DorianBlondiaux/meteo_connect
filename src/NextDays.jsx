import React from "react";
import getDateDay from "./Utility/GetDateDay";
import getWeatherIcone from "./Utility/GetWeatherIcone";
function NextDays(props) {

    if (props.isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="card text-center m-3">
        <div className="card-body">
            <div className ="card-content-jour">{getDateDay(props.time)}</div>
            <div className ="card-content-icone">{getWeatherIcone(props.weatherCode)}</div>
            <div className ="card-content-temp">{props.temperature_max} {props.tempUnit}</div>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
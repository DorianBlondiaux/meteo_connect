import React from "react";
import getWeatherIcone from "./Utility/GetWeatherIcone";

function CurrentDayHour(props) {
    console.log(props.time);
    const hour = new Date(props.time).getHours();
  return (
    <div className="card text-center m-3">
        <div className="card-body hoverbody">
            <div className ="card-content">{props.temperature} {props.tempUnit}</div>
            <div className ="card-content">{getWeatherIcone(props.weatherCode)}</div>
            <div className ="card-content">{hour}:00</div>
        </div>
      </div>
  );

}


export default CurrentDayHour;
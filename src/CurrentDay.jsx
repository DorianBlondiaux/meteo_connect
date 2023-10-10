import React from "react";
import getDateDay from "./Utility/GetDateDay";
import getWeatherIcone from "./Utility/GetWeatherIcone";

function CurrentDay(props) {
  let sunrise = new Date(props.myMeteo.daily.sunrise[0]);
  let sunset = new Date(props.myMeteo.daily.sunset[0]);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">Roubaix weather</h5>
      <div className="card-body-today">
        <li className="today"> {getDateDay(props.myMeteo.daily.time[0])}, Today </li>
        <li className="temperature_max"> {props.myMeteo.daily.apparent_temperature_max[0]} {props.myMeteo.daily_units.apparent_temperature_max} <div className="CurrentSun" >{getWeatherIcone(props.myMeteo.daily.weathercode[0])}</div></li>
        <li className="temperature_min"> ❄️ {props.myMeteo.daily.apparent_temperature_min[0]} {props.myMeteo.daily_units.apparent_temperature_min}</li>
        <li className="precipitation"> 🌧️ {props.myMeteo.daily.precipitation_sum[0]} {props.myMeteo.daily_units.precipitation_sum}</li>
        <li className="windspeed"> 💨 {props.myMeteo.daily.windspeed_10m_max[0]} {props.myMeteo.daily_units.windspeed_10m_max}</li>
        <li className="sunrise"> ☀️ {sunrise.getHours()}:{sunrise.getMinutes()}</li>
        <li className="sunset"> 🌙 {sunset.getHours()}:{sunset.getMinutes()}</li>
      </div>
    </div>
  );

}


export default CurrentDay;
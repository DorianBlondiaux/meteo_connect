import React from "react";
import getDateDay from "./UtilityFonctions";

function CurrentDay(props) {
  let sunrise = new Date(props.myMeteo.daily.sunrise[0]);
  let sunset = new Date(props.myMeteo.daily.sunset[0]);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">Quel temps fera-t-il aujourd'hui?</h5>
      <div className="card-body">
        <li>{getDateDay(props.myMeteo.daily.time[0])}, Today</li>
        <li>{props.myMeteo.daily.apparent_temperature_max[0]} {props.myMeteo.daily_units.apparent_temperature_max}</li>
        <li>{props.myMeteo.daily.apparent_temperature_min[0]} {props.myMeteo.daily_units.apparent_temperature_min}</li>
        <li>{props.myMeteo.daily.precipitation_sum[0]} {props.myMeteo.daily_units.precipitation_sum}</li>
        <li>{props.myMeteo.daily.windspeed_10m_max[0]} {props.myMeteo.daily_units.windspeed_10m_max}</li>
        <li>{sunrise.getHours()}:{sunrise.getMinutes()}</li>
        <li>{sunset.getHours()}:{sunset.getMinutes()}</li>
      </div>
    </div>
  );

}


export default CurrentDay;
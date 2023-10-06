import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

function CurrentDay(props) {

  if (props.isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="card text-center m-3">
      <h5 className="card-header">Simple GET Request</h5>
      <div className="card-body">
        <li>{props.myMeteo.latitude}</li>
        <li>{props.myMeteo.longitude}</li>
        <li>{props.myMeteo.daily.time[0]}</li>
        <li>{props.myMeteo.daily.weathercode[0]}</li>
        <li>{props.myMeteo.daily.apparent_temperature_max[0]}</li>
        <li>{props.myMeteo.daily.apparent_temperature_min[0]}</li>
        <li>{props.myMeteo.daily.precipitation_sum[0]}</li>
        <li>{props.myMeteo.daily.windspeed_10m_max[0]}</li>
        <li>{props.myMeteo.daily.sunrise[0]}</li>
        <li>{props.myMeteo.daily.sunset[0]}</li>
      </div>
    </div>
  );

}


export default CurrentDay;
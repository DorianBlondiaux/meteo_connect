import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

function CurrentDay(props) {

    // const [isLoading, setLoading] = useState(true);
    // const [myMeteo, setMyMeteo] = useState();
    // const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,sunrise,sunset&timezone=Europe%2FLondon';
    
    // useEffect(() => {
    //     axios.get(apiUrl).then(response => {
    //         setMyMeteo(response.data);
    //       setLoading(false);
    //     });
    //   }, []);



      if (props.isLoading) {
        return <div className="App">Loading...</div>;
      }
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Latitude:
                    { <li>{props.myMeteo.latitude}</li> }
                    Longitude:
                    { <li>{props.myMeteo.longitude}</li> }
                </div>
            </div>
        );
    
  }

  
export default CurrentDay;
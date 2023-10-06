import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

function GetMeteo() {

    const [isLoading, setLoading] = useState(true);
    const [myMeteo, setMyMeteo] = useState();
    
    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum&timezone=Europe%2FLondon").then(response => {
            setMyMeteo(response.data);
          setLoading(false);
        });
      }, []);

      if (isLoading) {
        return <div className="App">Loading...</div>;
      }
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Latitude:
                    { <li>{myMeteo.latitude}</li> }
                    Longitude:
                    { <li>{myMeteo.longitude}</li> }
                </div>
            </div>
        );
    
  }

  
export default GetMeteo;
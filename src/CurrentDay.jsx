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
                    Latitude:
                    { <li>{props.myMeteo.latitude}</li> }
                    Longitude:
                    { <li>{props.myMeteo.longitude}</li> }
                </div>
            </div>
        );
    
  }

  
export default CurrentDay;
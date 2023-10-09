import React from "react";
function NextDays(props) {

    const day = new Date(props.time);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (props.isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
            <li>{dayNames[day.getDay()]}</li>
            <li>{props.temperature_max}</li>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
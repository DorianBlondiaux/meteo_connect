import React from "react";
function NextDays(props) {

    if (props.isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
            <li>{props.time}</li>
            <li>{props.temperature_max}</li>
        </div>
      </div>
    );
  
  }
  
  
  export default NextDays;
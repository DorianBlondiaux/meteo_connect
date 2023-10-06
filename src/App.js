import logo from './logo.svg';
import './App.css';
import CurrentDay from './CurrentDay';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [isLoading, setLoading] = useState(true);
  const [myMeteo, setMyMeteo] = useState();
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,sunrise,sunset&timezone=Europe%2FLondon';
  
  useEffect(() => {
      axios.get(apiUrl).then(response => {
          setMyMeteo(response.data);
        setLoading(false);
      });
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CurrentDay myMeteo={myMeteo} isLoading={isLoading}></CurrentDay>
      </header>
    </div>
  );
}

export default App;

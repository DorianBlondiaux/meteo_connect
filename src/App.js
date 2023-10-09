import './App.css';
import CurrentDay from './CurrentDay';
import { useState, useEffect } from "react";
import axios from 'axios';
import NextDays from './NextDays';

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

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <CurrentDay myMeteo={myMeteo} isLoading={isLoading}></CurrentDay>
        {myMeteo.daily.time.slice(1).map((day, i) => (
          <NextDays key={i} time={day} temperature_max={myMeteo.daily.apparent_temperature_max[i + 1]} 
          isLoading={isLoading} tempUnit={myMeteo.daily_units.apparent_temperature_max}></NextDays>
        ))}
      </header>
    </div>
  );
}

export default App;

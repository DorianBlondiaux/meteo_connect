import './App.css';
import CurrentDay from './CurrentDay';
import { useState, useEffect } from "react";
import axios from 'axios';
import NextDays from './NextDays';

function App() {

  const [isLoading, setLoading] = useState(true);
  const [myMeteo, setMyMeteo] = useState();
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,sunrise,sunset&timezone=Europe%2FLondon';

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
        <CurrentDay myMeteo={myMeteo} isLoading={isLoading}></CurrentDay>
        <p>Météo des prochains jours:</p>
        {myMeteo.daily.time.slice(1).map((day, i) => (
          <NextDays key={i} time={day} temperature_max={myMeteo.daily.apparent_temperature_max[i + 1]} 
          isLoading={isLoading} tempUnit={myMeteo.daily_units.apparent_temperature_max}
          weatherCode={myMeteo.daily.weathercode[i + 1]}></NextDays>
        ))}
    </div>
  );
}

export default App;

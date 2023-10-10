import './App.css';
import CurrentDay from './CurrentDay';
import { useState, useEffect } from "react";
import axios from 'axios';
import NextDays from './NextDays';

function App() {

  const [isLoading, setLoading] = useState(true);
  const [myMeteo, setMyMeteo] = useState();

  const [isLoadingHourly, setLoadingHourly] = useState(true);
  const [myMeteoHourly, setMyMeteoHourly] = useState();

  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,sunrise,sunset&timezone=Europe%2FLondon';
  const apiUrlHourly = 'https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&hourly=apparent_temperature,weathercode&forecast_days=1&timezone=Europe%2FLondon';


  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setMyMeteo(response.data);
      setLoading(false);
    });

    axios.get(apiUrlHourly).then(response => {
      setMyMeteoHourly(response.data);
      setLoadingHourly(false);
    });
    console.log(myMeteoHourly)
  }, []);

  if (isLoading && isLoadingHourly) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <CurrentDay myMeteo={myMeteo}></CurrentDay>
      <p>Next days weather:</p>
      <div className="Weather">
        {myMeteo.daily.time.slice(1).map((day, i) => (
          <NextDays key={i} time={day} temperature_max={myMeteo.daily.apparent_temperature_max[i + 1]}
            tempUnit={myMeteo.daily_units.apparent_temperature_max}
            weatherCode={myMeteo.daily.weathercode[i + 1]}></NextDays>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import ShowResult from './ShowResult';

function App() {
  const [getCity, setGetCity] = useState('makkah');
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  const [weatherError, setWeatherError] = useState();
  
  useEffect(() => {
      handleWeather(getCity);
  }, [getCity])
  async function handleWeather (city) {
    try {
      const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c8d93de4c2984f5186b180621241711&q=${city}&days=5`)
      const data = await res.json();
      if (data.error) {
        setWeatherError(data);
        setWeatherData();
      } else {
        setWeatherData(data);
        setWeatherError();
      }
    } catch (error) {
        setWeatherError(error);
        setWeatherData();
    }
  }

  return (
    <div className="App">
      <h1>Dynamic Weather App</h1>
      <form action="/action_page.php">
        <label >City Name: </label>
        <input type="text" id="cityName" name="cityName" value={city || getCity} onChange={(e) => setCity(e.target.value)} /><br/><br/>
        <button id='submit-btn' onClick={(e) => {
          e.preventDefault();
          setGetCity(city);
          }} >Show Weather Statues</button>
      </form>
      {weatherError? 
        <h2>{weatherError.error.message? weatherError.error.message: 'May be invalid data or bad conection'}<br/>Please try again with valid data</h2>
      : <ShowResult successResult = {weatherData} />}
    </div>
  );
}

export default App;

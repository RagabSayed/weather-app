import React from 'react';
import './App.css';

function ShowResult(props) {
  const weatherData = props.successResult;
  const d = weatherData? new Date(weatherData.location.localtime): new Date();
  let hour = d.getHours();
  hour += 1;

  return (
    <div className="show-data">
    {weatherData &&
      <table>
        <caption>Weather Conditions for 
          <span style={{color:'blue', fontSize:'36px', fontWeight:'600'}}> { weatherData.location.name}</span> city, located in 
          <span style={{color:'blue', fontSize:'36px', fontWeight:'600'}}> {weatherData.location.country}</span> country</caption>
        <tr>
          <th>Content</th>
          <th>Today {weatherData.current.last_updated}</th>
          <th>{weatherData.forecast.forecastday[1].hour[hour].time}</th>
          <th>{weatherData.forecast.forecastday[2].hour[hour].time}</th>
        </tr>
        <tr>
          <td>Weather Icon</td>
          <td><img src={weatherData.current.condition.icon} /></td>
          <td><img src={weatherData.forecast.forecastday[1].hour[hour].condition.icon} /></td>
          <td><img src={weatherData.forecast.forecastday[2].hour[hour].condition.icon} /></td>
        </tr>
        <tr>
          <td>Tumperature</td>
          <td>{weatherData.current.temp_c}</td>
          <td>{weatherData.forecast.forecastday[1].hour[hour].temp_c}</td>
          <td>{weatherData.forecast.forecastday[2].hour[hour].temp_c}</td>
        </tr>
        <tr>
          <td>Weather Conditions</td>
          <td>{weatherData.current.condition.text}</td>
          <td>{weatherData.forecast.forecastday[1].hour[hour].condition.text}</td>
          <td>{weatherData.forecast.forecastday[2].hour[hour].condition.text}</td>
        </tr>
      </table>
      }
    </div>
  );
}

export default ShowResult;

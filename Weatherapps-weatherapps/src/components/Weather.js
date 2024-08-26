import React, { useState } from "react";
import axios from "axios";
import "./weather.css"
const Weather = ({setForcastData , setWeatherData , weatherData , setCity , city , fetchWeather , error}) => {
  // const [weatherData, setWeatherData] = useState({});
  // const [city, setCity] = useState("");


  const API_KEY = "ef7069ec305b1b0812b2f7c9f7a6621d";

  

  return (
    <div className="">

      {/* Search Box */}

      <div className="input-div white mid-div">

      <input
        type="text"
        className="enter-city"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
      <button onClick={() => fetchWeather(city)} className="weather-button">Get Weather</button>
        </div>
      {error && <p className="error">{error}</p>}
      {weatherData && weatherData?.main && (
        // <div>
        //   <section className="display">
        //     <div className="wrapper">
        //       <h2 id="cityoutput">
        //         Weather in : {weatherData.name}, {weatherData.sys.country}
        //       </h2>
        //       <p id="description">Temprature: {weatherData.main.temp}°F</p>
        //       <p>Humidity: {weatherData.main.humidity}%</p>
        //       <p id="temp">Conditions: {weatherData.weather[0].description}</p>
        //     </div>
        //   </section>
        // </div>

        <div className="white mid-low">

         <div className="div-back">
          <p> Weather in : {weatherData.name}, {weatherData.sys.country}</p>
          </div>
         <div className="div-back-1">
          <p> Temprature: {weatherData.main.temp}°F</p>
          </div>
         <div className="div-back-1">
          <p> Humidity: {weatherData.main.humidity}%</p>
          </div>
         <div className="div-back-1">
          <p> Conditions: {weatherData.weather[0].description}</p>
          </div>
         

          </div>
      )}
     
    
    </div>
  );
};

export default Weather;

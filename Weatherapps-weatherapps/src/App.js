// src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Weather from "./components/Weather";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import axios from "axios";

function App() {
  const API_KEY = "ef7069ec305b1b0812b2f7c9f7a6621d";
  
  const [forcastData , setForcastData] = useState(null);
  const [dataDays , setDataDays] = useState(null)
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
 

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      setForcastData(data.data.list)
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };


  
  return (
    <>
      <div className="App">
        <Heading/>
        <div className="dis-grid">
          <div className="left-grid">
            <LeftSide fetchWeather = {fetchWeather} setCity = {setCity} city = {city}/>
          </div> 
          <div className="mid-grid">
            <Weather setForcastData = {setForcastData} setWeatherData = {setWeatherData} weatherData = {weatherData} setCity = {setCity} city = {city} fetchWeather = {fetchWeather} error = {error}/>
          </div>
          <div className="right-grid">
            {forcastData && forcastData.length > 0 && 
            <RightSide forcastData = {forcastData}/>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

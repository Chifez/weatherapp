import React, { useState, useEffect } from "react";
import Search from "./components/search";
import WeatherData from "./components/weather-data";
import "./App.css";

function App() {
  const [city, setCity] = useState("lagos");
  const [getWeather, setGetWeather] = useState([{}]);
  useEffect(() => {
    const api = {
      key: "7f485cf569940e6335eaccba70c7fafa",
    };
    console.log(api.key);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setGetWeather(result);
      });
  }, [setCity]);

  return (
    <div className="App">
      <Search city={city} setCity={setCity} setGetWeather={setGetWeather} />
      <WeatherData
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        setGetWeather={setGetWeather}
      />
    </div>
  );
}

export default App;

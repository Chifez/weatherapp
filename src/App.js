import React, { useState, useEffect } from "react";
import "./App.css";
import { getCity,getLoc } from "./fetch";
import Search from "./components/search";
import WeatherData from "./components/weather-data";

function App() {  
  const [city, setCity] = useState("");
  const [getWeather, setGetWeather] = useState({});
  const [error,setError] = useState(null)
 

  const getLocation = async() =>{
    await navigator.geolocation.getCurrentPosition((position) => {
     const loc = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      if (city){
        getCity(city,setGetWeather,getWeather,setError)
      }else{
        getLoc(loc,setGetWeather,getWeather,setError)
      };
  })
  }


  
  useEffect(() => {
      getLocation();
  },[]);
  
  return (
    <div className="App">
      <Search
      setCity={setCity}
      getLocation={getLocation}
      city={city}
      />

      <WeatherData 
       error={error}
       getWeather ={getWeather}
       />
    </div>
  );
}

export default App;

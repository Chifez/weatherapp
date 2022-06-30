import React, { useState, useEffect } from "react";
import "./App.css";
import { getCity,getLoc } from "./fetch";
import Search from "./components/search";
import WeatherData from "./components/weather-data";
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Main from "./components";

function App() {  
  const [city, setCity] = useState("");
  const [getWeather, setGetWeather] = useState({});
  const [error,setError] = useState(null)
 

  const getLocation = async() =>{
    if(navigator.geolocation){
      if (city){
        getCity(city,setGetWeather,getWeather,setError)
      }else{
          await navigator.geolocation.getCurrentPosition((position) => {
           const loc = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
          getLoc(loc,setGetWeather,getWeather,setError)
          });
    }
  }
  else{
    alert('your location isnt turned on')
  }

}


  
  useEffect(() => {
      getLocation();
  },[]);
  
  return (
    <Router>
        <div className="App">
      <Routes>
        <Route path ='/' element = {<Main/>}/>
        <Route path = '/data' element ={
                    <div className="weather">
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
        } />
        

      </Routes>
        </div>

    </Router>
  );
}

export default App;

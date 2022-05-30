// import React, { useState, useEffect } from "react";

// import "./App.css";

// function App() {
//   const [weather, setWeather] = useState({});
//   const [locations, setLocations] = useState("london");
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     ifClicked();
//   }, []);

//   function ifClicked() {
//     const api = {
//       key: "7f485cf569940e6335eaccba70c7fafa",
//     };
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${api.key}&units=metric`
//     )
//       .then((res) => {
//         if (res.ok) {
//           console.log(res.status);
//           return res.json();
//         } else {
//           if (res.status === 404) {
//             return alert("Oops, there seems to be an error!(wrong location)");
//           }
//           alert("Oops, there seems to be an error!");
//           throw new Error("You have an error");
//         }
//       })
//       .then((object) => {
//         setWeather(object);
//         console.log(weather);
//       })
//       .catch((error) => console.log(error));
//     // fetch(
//     //   `https://api.unsplash.com/search/photos?query=${locations}&client_id={APP_ID}`
//     // )
//     //   .then((res) => {
//     //     if (res.ok) {
//     //       return res.json();
//     //     } else {
//     //       throw new Error("You made a mistake");
//     //     }
//     //   })
//     //   .then((data) => {
//     //     console.log(data);
//     //     setPhotos(data?.results[0]?.urls?.raw);
//     //   })
//     //   .catch((error) => console.log(error));
//   }
//   return (
//     <div className="app">
//       <div className="wrapper">
//         <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div>
//         <div className="app__data">
//           <p className="temp">Current Temparature: {weather?.main?.temp}</p>
//         </div>
//         <img className="app__image" src={photos} alt="" />
//       </div>
//     </div>
//   );
// }

// export default App;




























//*******end of this ********








import React, { useState, useEffect,useRef } from "react";
import { fetch } from "./fetch";
// import Search from "./components/search";
// import WeatherData from "./components/weather-data";
// // import Images from "./components/images.js";
import "./App.css";

function App() {  
  const [city, setCity] = useState("lagos");
  const [getWeather, setGetWeather] = useState({});
  const [error,setError] = useState(null)
 
  const inputRef = useRef(null)



  // const getLocation = async() =>{
  //   navigator.geolocation.getCurrentPosition((position) => {
  //    const loc = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  //    fetch(loc,setGetWeather,setError)
  // })
  // }


  const getForecast= async (e)=> {
    // e.preventDefault()
    if(city){
      fetch(city,setGetWeather,setError)
    }else{
       alert('type in a city')
    }
  }

  useEffect(() => {
    // getLocation();
    getForecast();
    inputRef.current.focus();
  },[]);
  
  return (
    <div className="App">
    <div 
     className="search">
      <input ref={inputRef}
        type="text"
        placeholder="Type a city here"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={(e)=>getForecast(e)}>search</button>
    </div>
    <div>
        {error && <div>something went wrong</div>}
       {getWeather.cod === 200 &&  <div>
          <div className="WeatherData">
             <p>{getWeather?.weather[0]?.description}</p>
              <img src={`http://openweathermap.org/img/wn/${getWeather?.weather[0]?.icon}@2x.png`} alt="logo" />
               <h2>{getWeather?.name}</h2>
               <div className="weather-datas"> 
                 <div className="temp-data">
                   <p>temp</p>
                   <p>{getWeather?.main?.temp}°C</p>
                 </div>
                 <div className="hum-data">
                   <p>humidity</p>
                   <p>{getWeather?.main?.humidity}</p>
                 </div>
               </div>
           </div>
        </div>}
    </div>
    </div>
  );
}

export default App;

      // {/* {getWeather.cod === 200 ? (
      //   <div className="WeatherData">
      //     <p>{getWeather?.weather[0]?.description}</p>
      //     <img src={`http://openweathermap.org/img/wn/${getWeather?.weather[0]?.icon}@2x.png`} alt="logo" />
      //     <h2>{getWeather.name}</h2>
      //     <div className="weather-datas">
      //       <div className="temp-data">
      //         <p>temp</p>
      //         <p>{getWeather?.main?.temp}°C</p>
      //       </div>
      //       <div className="hum-data">
      //         <p>humidity</p>
      //         <p>{getWeather?.main?.humidity}</p>
      //       </div>
      //     </div>
      //   </div>
      //  ) : (
      //   <p className="error">Oops something went wrong</p>
      // )}  */}
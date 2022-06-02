import React from "react";
const WeatherData = ({ error,getWeather}) => {
  return (
      <>
      {(error ? <div className="error">{error}</div> : (getWeather.cod === 200 && <div>
         <div className="WeatherData">
              <h4>{getWeather?.name}, {getWeather?.sys?.country}</h4>
                  <h2>{getWeather?.main?.temp}°C</h2>
           <div className="icon">
             <img src={`http://openweathermap.org/img/wn/${getWeather?.weather[0]?.icon}@4x.png`} alt="logo" />
           </div>
            <p className="type">{getWeather?.weather[0]?.description}</p>
              <div className="weather-datas"> 
                <div className="hum-data">
                  <p>humidity</p>
                  <p>{getWeather?.main?.humidity}</p>
                </div>
                <div className="wind-data">
                  <p>wind</p>
                  <p>{getWeather?.wind?.deg}</p>
                </div>
              </div>
          </div>
       </div>)
       )}
   </>
  );
};

export default WeatherData;
      // {error && <div>{error}</div>}
      // {getWeather.cod === 200 &&  <div>
      //    <div className="WeatherData">
      //       <p>{getWeather?.weather[0]?.description}</p>
      //        <img src={`http://openweathermap.org/img/wn/${getWeather?.weather[0]?.icon}@2x.png`} alt="logo" />
      //         <h2>{getWeather?.name}</h2>
      //         <div className="weather-datas"> 
      //           <div className="temp-data">
      //             <p>temp</p>
      //             <p>{getWeather?.main?.temp}°C</p>
      //           </div>
      //           <div className="hum-data">
      //             <p>humidity</p>
      //             <p>{getWeather?.main?.humidity}</p>
      //           </div>
      //         </div>
      //     </div>
      //  </div>}

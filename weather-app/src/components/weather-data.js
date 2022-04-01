const WeatherData = ({ city, setCity, getWeather, setGetWeather }) => {
  return (
    <div>
      {getWeather.cod === 200 ? (
        <div className="WeatherData">
          <p>{getWeather.weather[0].description}</p>
          <img src="" alt="logo" />
          <h2>{getWeather.name}</h2>
          <div className="weather-datas">
            <div className="temp-data">
              <p>temp</p>
              <p>{getWeather.main.temp}°C</p>
            </div>
            <div className="hum-data">
              <p>humidity</p>
              <p>{getWeather.main.humidity}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="error">oops something went wrong</p>
      )}
    </div>
  );
};

export default WeatherData;

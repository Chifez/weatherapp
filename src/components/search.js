const Search = ({ city, setCity, getWeather, setGetWeather }) => {
  function getForecast() {
    const api = {
      key: "7f485cf569940e6335eaccba70c7fafa",
    };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setGetWeather(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Type a city here"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button type="button" onClick={getForecast}>
        search
      </button>
    </form>
  );
};
export default Search;

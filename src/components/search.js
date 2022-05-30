// import React,{useEffect,useState,useRef} from "react";

// const Search = ({ getWeather, setGetWeather }) => {
//   const [city, setCity] = useState('lagos');

//  const inputRef = useRef(null)

//   const getForecast= async ()=> {
//     const api = {
//       key: "7f485cf569940e6335eaccba70c7fafa",
//     };

//     await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setGetWeather(result);
//       })
//       .catch((err) => console.log(err));
//       return;
//   }

//   useEffect(() => {
//     setCity('')
//     // getForecast();
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div 
//     // onSubmit={(e)=>e.preventDefault()}
//      className="search">
//       <input ref={inputRef}
//         type="text"
//         placeholder="Type a city here"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />

//       <button onClick={getForecast}>search</button>
//     </div>
//   );
// };
// export default Search;

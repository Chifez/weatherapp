
 const api = {
    key: "7f485cf569940e6335eaccba70c7fafa",
  };

export const getCity =(city,setGetWeather,getWeather,setError)=>{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=metric`
      )
      .then((res) => {  //how to make this part work
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            // alert("Oops, there seems to be an error!");
            setError(("Oops, there seems to be an error!(incorrect location)"));
    
        }
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setGetWeather(object);
        console.log(getWeather);
      })
      .catch((error) => console.log(error));
      setError('')
}


export const getLoc =(loc,setGetWeather,getWeather,setError)=>{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?${loc}&appid=${api.key}&units=metric`
      )
      .then((res) => { 
   if (res.ok) {
     console.log(res.status);
     return res.json();
   } else {
     if (res.status === 404) {
       setError(("Oops, there seems to be an error!(wrong location)"));
      //  alert("Oops, there seems to be an error!");
     }
     throw new Error("You have an error");
   }
 })
 .then((object) => {
   setGetWeather(object);
   console.log(getWeather);
 })
 .catch((error) => console.log(error));
}
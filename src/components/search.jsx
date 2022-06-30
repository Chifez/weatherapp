import React,{useEffect,useRef} from "react";

const Search = ({setCity,getLocation,city}) => {
    
 const inputRef = useRef(null)


useEffect(() => {
  inputRef.current.focus();
 }, []);

  return (
   <div 
     className="search">
     <input ref={inputRef}
       type="text"
       placeholder="Type a city here"
       value={city}
       onChange={(e) => setCity(e.target.value)}
     />

     <button onClick={getLocation}>search</button>
   </div>
  );
};
export default Search;

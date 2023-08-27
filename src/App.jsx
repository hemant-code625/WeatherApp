import { useEffect, useRef, useState } from "react";
import "./App.css";
import WeatherComponent from "./components/weatherComponent";


function App() {
  const [Val, setVal] = useState("Delhi");
  const [data, setData] = useState({})
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      inputRef.current.click(); 
    }
  };

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${Val}&units=metric&appid=53c0eec02c1327df9e1f716017a3c313`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main : weatherDetail } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const details = {
        temp,
        humidity,
        weatherDetail,
        name,
        country,
        sunset,
        pressure,
        speed,
      };
      setData(details);            // now this obj can be accesed outside the function scope
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            placeholder="Enter Location ..."
            value={Val}
            onChange={(e) => setVal(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <button ref={inputRef} className="searchButton" type="button"
          // we just need to get the data onClick instead not to call the function
          onClick={getWeatherInfo}>    
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
      <WeatherComponent data = {data} />
      
    </>
  );
}

export default App;

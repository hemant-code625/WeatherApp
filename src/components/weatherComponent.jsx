import React, { useState, useEffect } from "react";

const WeatherComponent = ({ data }) => {
  const {
    temp,
    humidity,
    weatherDetail,
    name,
    country,
    sunset,
    pressure,
    speed,
  } = data;

  const [weatherState, setWeatheState] = useState("");

  useEffect(() => {
    if (weatherDetail) {
      switch (weatherDetail) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
        case "Thunderstorm":
          setWeatheState("wi-thunderstorm");
          break;
        case "Rain":
            setWeatheState("wi-rain");
            break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weatherDetail]);

  let time = new Date(sunset * 1000);
  let TimeStr = `${time.getHours()} : ${time.getMinutes()}`;
  return (
    <>
      <div className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span> {temp}&deg;{"C"}</span>
          </div>

          <div className="description">
            <div className="weatherCondition"> {weatherDetail} </div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date"> {new Date().toLocaleString()} </div>
        {/* 4 column section */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                {" "}
                <i className={"wi wi-sunset"}></i>{" "}
              </p>
              <p className="extra-info-leftside">
                {" "}
                {TimeStr} <br /> Sunset{" "}
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <i className={"wi wi-humidity"}></i>{" "}
              </p>
              <p className="extra-info-leftside">
                {" "}
                {humidity}
                <br /> Humidity{" "}
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                {" "}
                <i className={"wi wi-rain"}></i>{" "}
              </p>
              <p className="extra-info-leftside">
                {" "}
                {pressure} <br /> Pressure {" "}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                {" "}
                <i className={"wi wi-strong-wind"}></i>{" "}
              </p>
              <p className="extra-info-leftside">
                {" "}
                {speed} <br /> Speed{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;

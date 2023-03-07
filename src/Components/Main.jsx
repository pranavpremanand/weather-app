import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import "./Main.css";
import WeatherBox from "./WeatherBox";

const Main = () => {
  const [search, setSearch] = useState();
  const [weatherData, setWeatherData] = useState();

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
      );
    //   setWeatherData(data);
    console.log(data)
    } catch (err) {
      console.log(err, "ERROR");
      // handle error
    }
  };

  return (
    <>
      <div className="main">
        <div className="input-box">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <FontAwesomeIcon onClick={fetchWeather} className="search-icon" icon={faSearch} />
        </div>
        {weatherData && <WeatherBox data={weatherData} />}
      </div>
    </>
  );
};

export default Main;

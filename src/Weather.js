import React from "react";
import CitySearchForm from "./CitySearchForm";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Larnaca",
    temperature: 33,
    date: "Sep 3 17:32",
    weekday: "Friday",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
    pressure: 1017,
  };
  return (
    <div className="Weather">
      <div className="appbody">
        <CitySearchForm />
        <div className="bodySection">
          <div className="row mb-5">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul className="data">
                <li className="">
                  {weatherData.date} {weatherData.weekday}
                </li>
                <li>
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="icon"
                  />{" "}
                  {weatherData.description}
                </li>
                <li className="ms-3">Wind: {weatherData.wind} m/s</li>
                <li className="ms-3">Humidity: {weatherData.humidity}%</li>
                <li className="ms-3">Pressure: {weatherData.pressure} hPa</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="current-temp">
                <span className="temp">{weatherData.temperature}</span>
                <span className="units">
                  <a href="/">°C</a> |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          {/* <ul className="conditions d-flex justify-content-evenly">
            <li>Wind: {weatherData.wind} m/s</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Pressure: {weatherData.pressure} hPa</li>
          </ul> */}
        </div>
        <Forecast />
      </div>
    </div>
  );
}

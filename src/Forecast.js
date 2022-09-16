import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card weather-forecast">
        <div className="card-body p-0">
          <ul className="d-flex justify-content-evenly">
            <li>
              <strong>Fri</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Sat</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Sun</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Mon</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Tue</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Wed</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
            <li>
              <strong>Thu</strong>
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />{" "}
              <br />
              25ºC{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

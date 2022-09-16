import React from "react";
import "./CitySearchForm.css";

export default function CitySearchForm() {
  return (
    <div className="CitySearchForm">
      <form className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter location..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col p-0">
            <button className="btn btn-outline-light" type="submit">
              <i className="fa-solid fa-magnifying-glass" title="Search"></i>
            </button>
          </div>
          <div className="col p-0">
            <button className="btn btn-outline-light" type="click">
              <i
                className="fa-solid fa-location-arrow"
                title="Current location"
              ></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

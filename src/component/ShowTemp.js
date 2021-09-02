import React from "react";
import "./css/ShowTemp.css";

const ShowTemp = ({ getApiData }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="weather-card one">
            <div className="top">
              <div className="wrapper">
                <div className="mynav"></div>
                {getApiData != null ? (
                  <>
                    <h1 className="heading">
                      {console.log(getApiData)}
                      {getApiData.current.condition.text}{" "}
                      <img src={`https:${getApiData.current.condition.icon}`} />
                    </h1>
                    <h3 className="location">
                      {getApiData.location.name}, {getApiData.location.country}
                    </h3>

                    <p className="temp">
                      <span className="temp-value">20</span>
                      <span className="deg">0</span>
                      <a href="javascript:;">
                        <span className="temp-type">C</span>
                      </a>
                    </p>
                    <p className="heading">
                      <span className="temp-value">
                        Outside, <br />
                        it's
                        {(() => {
                          if (getApiData.current.feelslike_c >= 40)
                            return " Hot";
                          else if (getApiData.current.feelslike_c >= 10)
                            return " Warm";
                          else if (getApiData.current.feelslike_c <= 10)
                            return "Cold";
                        })()}
                      </span>
                    </p>
                  </>
                ) : (
                  <p>Please Enter Valid City Name....</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTemp;

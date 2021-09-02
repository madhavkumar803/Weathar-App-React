import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import ShowTemp from "./component/ShowTemp";
import axios from "axios";

const App = () => {
  const [apiData, setapiData] = useState(null);
  const [cityName, setCityName] = useState("patna");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=your key=${cityName}`
      );
      setapiData(result.data);
    };
    fetchItems();
  }, [cityName]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e) => {
                  setCityName(e.target.value);
                }}
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <ShowTemp getApiData={apiData} />
        </Route>

        <Route exact path="/login">
          <LoginPage getCityName={(p) => setCityName(p)} />
        </Route>
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
};

export default App;

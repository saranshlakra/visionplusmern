import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import app from "./bookiappointment";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-black"
        id="nav-height"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand color-white" to="#">
            Vision+
          </NavLink>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active color-white"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle color-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TEST
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/visiontest">
                      VISION
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/hearingtest">
                      HEARING
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/abouteyes">
                      ABOUT EYES
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link color-white" to="/signin">
                  LOGIN
                </NavLink>
              </li>
              {/* <li className="nav-item">
          <NavLink className="nav-link color-white" to="/testpage">LOGIN</NavLink>
        </li> */}
              <li className="nav-item">
                <NavLink className="nav-link color-white" to="/signup">
                  Register
                </NavLink>
              </li>
              {/* <li className="nav-item">
          <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li> */}
            </ul>

            {/* <div class="calendly-inline-widget" data-url="https://calendly.com/graphixreaction/eye-health-checkup" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
            <form className="d-flex">
              {/* <input className="form-control me-2" type="button" placeholder="Search" aria-label="Search" /> */}
              {/* BOOK APPOINTMENT LINK : data-url="https://calendly.com/graphixreaction/eye-health-checkup" */}

              {/* <button>{app}</button> */}

              <a
                target="_blank"
                className="btn btn-outline-success App"
                href="https://calendly.com/graphixreaction/eye-health-checkup?month=2022-10"
              >
                BOOK APPOINTMENT{" "}
              </a>
              
               <NavLink
                className="btn btn-outline-success App"
                to="/doclist"
              >
                Doctors List{" "}
              </NavLink>
              {/* <div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
      </div> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

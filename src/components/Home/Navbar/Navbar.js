import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./Navbar.css";
import useLocalStorage from "../../../Service/useLocalStorage";

const Navbar = () => {
  const style = {
    fontWeight: "500",
  };
  const [loggedInUser, setLoggedInUser] = useLocalStorage("userInfo", {});

  const logOut = () => {
    setLoggedInUser({});
  };
  return (
    <div style={style} className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <img className="img-fluid logo" src={logo} alt="logo" />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto d-flex aling-items-center ">
            <li className="nav-item active">
              <a className="nav-link actives" href="#home">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" href="#">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
            <li>
              {loggedInUser.email ? (
                <div>
                  <img
                    className="profile"
                    src={loggedInUser.photoURL}
                    alt="profile_photo"
                  />
                  <p style={{ display: "inline" }}>
                    {loggedInUser.displayName}
                  </p>
                </div>
              ) : (
                <Link to="/login">
                  {" "}
                  <button className="btn  btn-dark btn_custom">Login</button>
                </Link>
              )}
            </li>
            <li>
              {loggedInUser.email && (
                <button
                  onClick={logOut}
                  className="btn btn-dark py-1 px-2 text-white"
                >
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

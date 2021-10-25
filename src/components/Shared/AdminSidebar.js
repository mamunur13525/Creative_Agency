import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import { FaListUl, FaCartArrowDown, FaEnvelope } from "react-icons/fa";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const [activePage] = useState(pathname || "");

  return (
    <div className="side_bar w-25">
      <Link className="hover" to="/">
        {" "}
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="mt-5 font-weight-bold">
        <Link className="hover" to="/order">
          {" "}
          <div
            className="d-flex align-items-center"
            style={activePage === "/order" ? { color: "#30D4C7" } : {}}
          >
            <FaListUl className="m-2" />
            <p className="hover">Order</p>
          </div>
        </Link>
        <Link className="hover" to="/servicelist">
          {" "}
          <div
            className="d-flex  my-3 align-items-center"
            style={activePage === "/servicelist" ? { color: "#30D4C7" } : {}}
          >
            <FaCartArrowDown className="m-2" />
            <p className="hover">Service list</p>
          </div>{" "}
        </Link>
        <Link to="/review">
          <div
            className="d-flex align-items-center "
            style={activePage === "/review" ? { color: "#30D4C7" } : {}}
          >
            <FaEnvelope className="m-2" />
            <p className="hover">Review</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import { FaListUl, FaCartArrowDown, FaEnvelope } from "react-icons/fa";
import "./AdminSidebar.css";
import useLocalStorage from "../../Service/useLocalStorage";
import { GoSettings } from "react-icons/go";
import { MdRateReview } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
const AdminSidebar = () => {
  const { pathname } = useLocation();
  const [activePage] = useState(pathname || "");
  const [loggedInUser] = useLocalStorage("userInfo");

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
        <Link to="/admin/makeadmin">
          <div
            className="d-flex align-items-center mt-3"
            style={
              activePage === "/admin/makeadmin"
                ? { color: "#30D4C7" }
                : { color: "#007BFF" }
            }
          >
            <GrUserAdmin className="m-2" />
            <p className="hover">Make Admin</p>
          </div>
        </Link>
      </div>
      {loggedInUser && loggedInUser.admin && (
        <div className="mt-5 font-weight-bold">
          <Link className="hover" to="/admin/servicelist">
            {" "}
            <div
              className="d-flex align-items-center"
              style={
                activePage === "/admin/servicelist" ? { color: "#30D4C7" } : {}
              }
            >
              <FaListUl className="m-2" />
              <p className="hover">Order list</p>
            </div>
          </Link>
          <Link className="hover" to="/admin/addservice">
            {" "}
            <div
              className="d-flex  my-3 align-items-center"
              style={
                activePage === "/admin/addservice" ? { color: "#30D4C7" } : {}
              }
            >
              <FaCartArrowDown className="m-2" />
              <p className="hover">Add Service</p>
            </div>{" "}
          </Link>

          <Link to="/admin/client-reviews">
            <div
              className="d-flex align-items-center mt-3"
              style={
                activePage === "/admin/client-reviews"
                  ? { color: "#30D4C7" }
                  : {}
              }
            >
              <MdRateReview className="m-2" />
              <p className="hover">Client Reviews</p>
            </div>
          </Link>
          <Link to="/admin/our-works">
            <div
              className="d-flex align-items-center mt-3"
              style={
                activePage === "/admin/our-works" ? { color: "#30D4C7" } : {}
              }
            >
              <GoSettings className="m-2" />
              <p className="hover">Our Works</p>
            </div>
          </Link>
        </div>
      )}

      <div className="mt-5 font-weight-bold"></div>
    </div>
  );
};

export default AdminSidebar;

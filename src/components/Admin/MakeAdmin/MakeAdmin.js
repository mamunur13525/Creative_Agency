import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Admin/ServicesAdmin/ServicesAdmin.css";
import "../../Servicelist/Servicelist.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faShoppingCart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});

  const handleChange = (e) => {
    const email = { adminEmail: e.target.value };
    setAdmin(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(admin);
    fetch("http://localhost:5000/adminlogin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Admin Make Succesfully");
      }).catch(err => console.log(err))
    
  };

  return (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <div className="side_bar w-25">
          <Link className="hover" to="/">
            {" "}
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="mt-5 font-weight-bold">
            <Link to="/admin/servicelist">
              {" "}
              <div className="d-flex  my-3" style={{ color: "#30D4C7" }}>
                <FontAwesomeIcon className="m-2" icon={faServer} />{" "}
                <p className="hover">Service list</p>
              </div>{" "}
            </Link>

            <Link className="hover" to="/admin/addservice">
              {" "}
              <div className="d-flex ">
                <FontAwesomeIcon className="m-2" icon={faShoppingCart} />
                <p className="hover">Add Service</p>
              </div>{" "}
            </Link>
            <Link className="hover" to="/admin/makeadmin">
              {" "}
              <div className="d-flex ">
                <FontAwesomeIcon className="m-2" icon={faEnvelope} />{" "}
                <p className="hover">Make Admin</p>
              </div>{" "}
            </Link>
          </div>
        </div>
        <div className="main">
          <h4>Make Admin</h4>
          <div className="formbox">
            <div className="detail row">
              <form onSubmit={handleSubmit}>
                <h4 id="headingFour"> Email</h4>
                <div id="width">
                  <input
                    onBlur={handleChange}
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    id="name"
                  />

                  <input
                    className="btn w-25 btnSubmit btn-success btn_custom"
                    type="submit"
                    name=""
                    id=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MakeAdmin;

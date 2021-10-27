import React, { useContext, useState } from "react";
import "../../Admin/ServicesAdmin/ServicesAdmin.css";
import "../../Servicelist/Servicelist.css";
import "./MakeAdmin.css";
import AdminSidebar from "../../Shared/AdminSidebar";
import AdminList from "./AdminList";
import { createNotification } from "../../Shared/Notify";
import { ChangeFindContext } from "../../../App";
import useLocalStorage from "../../../Service/useLocalStorage";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);
  const [loggedInUser, setLoggedInUser] = useLocalStorage("userInfo");

  const handleChange = (e) => {
    const email = { adminEmail: e.target.value };
    setAdmin(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    fetch("http://localhost:5000/adminlogin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setChangeFetch({
            ...changeFetch,
            adminList: !changeFetch.adminList,
          });
          createNotification("success", "Succesfully", result.message);
          setLoggedInUser({ ...loggedInUser, admin: true });
          if (admin.adminEmail === loggedInUser.email) {
            setTimeout(() => {
              createNotification(
                "info",
                "Please",
                "Reload this page to show admin panel"
              );
            }, 2000);
          }
        } else {
          createNotification("error", "Failed", result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Make Admin For More Functionality Show</h4>
          <div className="formbox">
            <div className="detail row justify-content-start">
              <form onSubmit={handleSubmit}>
                <h4 className="ml-3  mt-4"> Email</h4>
                <div id="width">
                  <input
                    onBlur={handleChange}
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    id="name"
                  />

                  <input
                    className="btn w-auto btnSubmit btn-success btn_custom"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
            {loggedInUser && loggedInUser.admin && <AdminList />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default MakeAdmin;

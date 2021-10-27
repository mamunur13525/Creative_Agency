import React, { useContext, useState } from "react";
import "../../Admin/ServicesAdmin/ServicesAdmin.css";
import "../../Servicelist/Servicelist.css";
import useLocalStorage from "../../../Service/useLocalStorage";
import AdminSidebar from "../../Shared/AdminSidebar";
// import AdminServicesList from "./AdminServicesList";
import { ChangeFindContext } from "../../../App";
import { createNotification } from "../../Shared/Notify";
import NotFound from "../../NotFound";
import WorksList from "./WorksList";

const OurWorks = () => {
  const [file, setFile] = useState(null);
  
  const [loggedInUser] = useLocalStorage("userInfo");
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);


  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  console.log(file)

  const formData = new FormData();
  formData.append("file", file);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/add-works", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        createNotification("success", "Sucessfully", "Service Added");
        setChangeFetch({
            ...changeFetch,
            workList: !changeFetch.workList,
          });
      })
      .catch((err) => {
        createNotification('error','Failed',err.msg);
      });
  };

  return !loggedInUser.admin ? (
    <NotFound />
  ) : (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Our Works Showing Front Page List</h4>
          <div className="formbox">
            <div className="detail row">
              <form onSubmit={handleSubmit} className="boxxxx form">
                <div className="d-flex threeBox">
                  <div className="mt-4">
                    <h5 className="ml-4">Work Image</h5>
                    <input
                      onChange={handleFileChange}
                      className="btn btn-outline-success"
                      type="file"
                      name="file"
                      id=""
                      required
                    />
                  </div>
                </div>
                <input
                  className="submit btn btn-success submitBtn"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
            <div className="m-3">
              <WorksList />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default OurWorks;

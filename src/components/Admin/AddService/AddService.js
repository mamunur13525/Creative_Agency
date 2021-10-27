import React, { useContext, useState } from "react";
import "../../Admin/ServicesAdmin/ServicesAdmin.css";
import "../../Servicelist/Servicelist.css";
import "./AddService.css";
import useLocalStorage from "../../../Service/useLocalStorage";
import AdminSidebar from "../../Shared/AdminSidebar";
import AdminServicesList from "./AdminServicesList";
import { ChangeFindContext } from "../../../App";
import { createNotification } from "../../Shared/Notify";
import NotFound from "../../NotFound";
const Addservice = () => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useLocalStorage("userInfo");
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);

  const handleBlur = (e) => {
    const newTitle = { ...info };
    newTitle[e.target.name] = e.target.value;
    newTitle[e.target.name] = e.target.value;
    setInfo(newTitle);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", info.title);
  formData.append("description", info.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/addAService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        createNotification("success", "Sucessfully", "Service Added");
        setLoggedInUser({ ...loggedInUser, patch: data.path });
        setChangeFetch({
          ...changeFetch,
          serviceList: !changeFetch.serviceList,
        });
      })
      .catch((error) => {
        error(error);
      });
  };

  return !loggedInUser.admin ? (
    <NotFound />
  ) : (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Add Service</h4>
          <div className="formbox">
            <div className="detail row">
              <form onSubmit={handleSubmit} className="boxxxx form">
                <div className="d-flex threeBox">
                  <div className="boxss">
                    <div className=" first">
                      <h5 className="ml-4 mt-4">Services title</h5>
                      <input
                        onBlur={handleBlur}
                        placeholder="Enter Title"
                        type="text"
                        name="title"
                        id=""
                        required
                      />
                    </div>
                    <div className=" second">
                      <h5 className="ml-4">Description </h5>
                      <textarea
                        onBlur={handleBlur}
                        row="8"
                        placeholder="Enter Your description"
                        type="text"
                        name="description"
                        id=""
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="ml-4">Icon</h5>
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
              <AdminServicesList />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Addservice;

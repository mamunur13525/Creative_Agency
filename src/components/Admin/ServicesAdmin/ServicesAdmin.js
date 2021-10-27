import React, { useEffect, useState } from "react";
import "./ServicesAdmin.css";
import "../../Servicelist/Servicelist.css";
import AllServices from "./AllServices";
import spinner from "../../../images/icons/spinner.gif";
import AdminSidebar from "../../Shared/AdminSidebar";
import { FaDatabase } from "react-icons/fa";
import NotFound from "../../NotFound";
import useLocalStorage from "../../../Service/useLocalStorage";

const fileIconSize = {
  fontSize: "2.4rem",
};

const ServicesAdmin = () => {
  const [loggedInUser] = useLocalStorage("userInfo");
  const [allservices, setAllservices] = useState({
    status: "not_fetch",
    resultArr: [],
  });
  useEffect(() => {
    fetch("http://localhost:5000/admin/allservices")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAllservices({ status: "fetch", resultArr: result });
      });
  }, []);

  return !loggedInUser.admin ? (
    <NotFound />
  ) : (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>All Client Order MainTain List</h4>
          <div className="formbox">
            <div className="detail row pt-0">
              <div className="outsideTable">
                <div className="table-responsive my-0">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="table-head-row">
                        <th>No.</th>
                        <th>Name</th>
                        <th>Work</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {allservices &&
                        allservices.resultArr.map((services, ind) => (
                          <AllServices key={services._id} services={services} />
                        ))}
                    </tbody>
                  </table>
                  {allservices.status === "not_fetch" && (
                    <div className="img text-muted">
                      <img className="img-fluid" src={spinner} alt="spinner" />
                      <h5>Loding</h5>
                    </div>
                  )}
                  {allservices.status === "fetch" &&
                    JSON.stringify(allservices.resultArr) === "[]" && (
                      <div className="m-auto text-muted">
                        <FaDatabase style={fileIconSize} />
                        <h5>No Data Found!</h5>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ServicesAdmin;

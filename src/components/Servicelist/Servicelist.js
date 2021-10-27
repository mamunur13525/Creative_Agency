import React, { useEffect, useState } from "react";
import "../Order/Order.css";
import "./Servicelist.css";
import Servicess from "./Service";
import spinner from "../../images/icons/spinner.gif";
import AdminSidebar from "../Shared/AdminSidebar";
import useLocalStorage from "../../Service/useLocalStorage";
import NotFound from "../NotFound";
const Servicelist = () => {
  const trash =
    "https://i.ibb.co/hD6ZzGj/121473614-1498812373641223-8720674945442455752-n.png";
  const [loggedInUser] = useLocalStorage("userInfo", {});
  const [services, setServices] = useState({
    status: "not_fetch",
    resultArr: [],
  });
  //Fetch Data
  useEffect(() => {
    fetch(`http://localhost:5000/servicelist?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((result) => {
        setServices({ status: "fetch", resultArr: result });
      });
  }, []);

  return loggedInUser.admin ? (
    <NotFound />
  ) : (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Service List</h4>
          <div className="formbox">
            <div className="detail row align-items-center justify-content-start pt-0">
              {services.status === "not_fetch" && (
                <div className="img">
                  {" "}
                  <img className="img-fluid" src={spinner} alt="spinner" />{" "}
                  <h5 className="text-center">Loding</h5>
                </div>
              )}

              {services.status === "fetch" &&
                JSON.stringify(services.resultArr) === "[]" && (
                  <>
                    <img src={trash} alt="trash" />
                    <h4 className="text-center">Emty Data</h4>
                  </>
                )}

              {services &&
                services.resultArr.map((service) => (
                  <Servicess key={service._id} servicess={service}></Servicess>
                ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Servicelist;

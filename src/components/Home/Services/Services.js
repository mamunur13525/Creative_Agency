import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
import spinner from "../../../images/icons/spinner.gif";
import { FaDatabase } from "react-icons/fa";

const fileIconSize={
    fontSize:'2.4rem'
}
const Services = () => {
  const [services, setServices] = useState({
    status: "not_fetch",
    serviceArr: [],
  });
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setServices({ status: "fetch", serviceArr: res.result });
        }
      });
  }, []);
  console.log(services);
  const handleCLick = (e) => {};

  return (
    <section className="services_section">
      <h2 className="headingTwo">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h2>
      <div className="container">
        <div className="row box text-center ">
          {services.status === "not_fetch" && (
            <div className="img text-muted">
              <img className="img-fluid" src={spinner} alt="spinner" />
              <h5>Loding</h5>
            </div>
          )}
          {services.status === "fetch" &&
            JSON.stringify(services.serviceArr) === "[]" && (
              <div className="m-auto text-muted">
                <FaDatabase  style={fileIconSize}/>
                <h5>No Data Found!</h5>
              </div>
            )}
          {services &&
            services.serviceArr.map((service) => (
              <Service
                onClick={(e) => handleCLick(e)}
                key={service._id}
                service={service}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

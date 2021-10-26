import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 ">
      <Link
        className="text-decoration-none"
        to={{ pathname: "/order", state: { serviceName: service.title } }}
      >
        <div className="boxx border rounded">
          <div className="opacity">
            <div className="icon">
              <img
                className="img-fluid"
                src={service.img || `http://localhost:5000/${service.fileName}`}
                alt="logo"
              />
            </div>
            <h4>{service.title}</h4>
            <p className="text-secondary">{service.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;

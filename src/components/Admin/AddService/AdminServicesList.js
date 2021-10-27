import React, { useContext, useEffect, useState } from "react";
import "./AddService.css";
import { IoClose } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import spinner from "../../../images/icons/spinner.gif";
import { createNotification } from "../../Shared/Notify";
import { ChangeFindContext } from "../../../App";
import { HiOutlineRefresh } from "react-icons/hi";
const fileIconSize = {
  fontSize: "2.4rem",
};

const AdminServicesList = () => {
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);
  const [refresh, setRefresh] = useState(false);
  const [services, setServices] = useState({
    status: "not_fetch",
    serviceArr: [],
  });
  useEffect(() => {
    setServices({ status: "not_fetch", serviceArr: [] });
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setServices({ status: "fetch", serviceArr: res.result })
        }
      })
      .catch((err) => {
        createNotification(
          "warning",
          "Data Load failed",
          "check internet connection or something else!"
        )
        setServices({ status: "fetch_failed", serviceArr: [] });
      });
  }, [refresh,changeFetch.serviceList]);
  //Delete Client Reviews
  const delteIcon = (id) => {
    fetch(`http://localhost:5000/delete_service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        if (result.status) {
          setChangeFetch({
            ...changeFetch,
            serviceList: !changeFetch.serviceList,
          });
          createNotification("success", result.message);
        } else {
          createNotification("error", result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  console.log({ services });
  return (
    <div className="table-responsive">
      <div className="table-wrapper">
        <h2 className="text-left">All Services on Front</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-head-row">
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {services &&
              services.serviceArr.map((service, ind) => (
                <tr key={service._id}>
                  <td>{ind + 1}</td>
                  <td style={{ width: "11rem" }}>
                    <img
                      style={{ width: "45px", height: "45px" }}
                      src={`http://localhost:5000/${service.fileName}`}
                      className="avatar"
                      alt="service_image"
                    />{" "}
                  </td>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                  <td>
                    <span onClick={() => delteIcon(service._id)}>
                      <IoClose
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "1.5rem",
                        }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {services.status === "not_fetch" && (
          <div className="img text-muted">
            <img className="img-fluid" src={spinner} alt="spinner" />
            <h5>Loding</h5>
          </div>
        )}
        {services.status === "fetch_failed" && (
          <button
            onClick={() => {
              setRefresh((prv) => !prv);
              setServices({ status: "not_fetch", serviceArr: [] });
            }}
            className="d-flex aling-items-center btn btn-warning text-muted border justify-content-center"
          >
            <HiOutlineRefresh />
            <span>Click to Refresh</span>
          </button>
        )}
        {services.status === "fetch" &&
          JSON.stringify(services.serviceArr) === "[]" && (
            <div className="m-auto text-muted">
              <FaDatabase style={fileIconSize} />
              <h5>No Data Found!</h5>
            </div>
          )}
      </div>
    </div>
  );
};

export default AdminServicesList;

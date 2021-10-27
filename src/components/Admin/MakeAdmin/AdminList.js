import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import spinner from "../../../images/icons/spinner.gif";
import { createNotification } from "../../Shared/Notify";
import { ChangeFindContext } from "../../../App";
import { HiOutlineRefresh } from "react-icons/hi";
const fileIconSize = {
  fontSize: "2.4rem",
};

const AdminList = () => {
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);
  const [refresh, setRefresh] = useState(false);
  const [admin, setAdmin] = useState({
    status: "not_fetch",
    adminArr: [],
  });
  useEffect(() => {
    setAdmin({ status: "not_fetch", adminArr: [] });
    fetch("http://localhost:5000/all-admin")
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setAdmin({ status: "fetch", adminArr: res.result });
        }
      })
      .catch((err) => {
        createNotification(
          "warning",
          "Data Load failed",
          "check internet connection or something else!"
        );
        setAdmin({ status: "fetch_failed", adminArr: [] });
      });
  }, [refresh, changeFetch.adminList]);
  //Delete Client Reviews
  const delteIcon = (id) => {
    fetch(`http://localhost:5000/delete_admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        if (result.status) {
          setChangeFetch({
            ...changeFetch,
            adminList: !changeFetch.adminList,
          });
          createNotification("success", result.message);
        } else {
          createNotification("error", result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-responsive mx-3" style={{ width: "90%" }}>
      <div className="table-wrapper">
        <h2 className="text-left">All Admin Email</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-head-row">
              <th>No.</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {admin &&
              admin.adminArr.map((service, ind) => (
                <tr key={service._id}>
                  <td>{ind + 1}</td>
                  <td>{service.adminEmail}</td>
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
        {admin.status === "not_fetch" && (
          <div className="img text-muted">
            <img className="img-fluid" src={spinner} alt="spinner" />
            <h5>Loding</h5>
          </div>
        )}
        {admin.status === "fetch_failed" && (
          <button
            onClick={() => {
              setRefresh((prv) => !prv);
              setAdmin({ status: "not_fetch", adminArr: [] });
            }}
            className="d-flex aling-items-center btn btn-warning text-muted border justify-content-center"
          >
            <HiOutlineRefresh />
            <span>Click to Refresh</span>
          </button>
        )}
        {admin.status === "fetch" && JSON.stringify(admin.adminArr) === "[]" && (
          <div className="m-auto text-muted">
            <FaDatabase style={fileIconSize} />
            <h5>No Data Found!</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminList;

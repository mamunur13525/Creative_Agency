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

const WorksList = () => {
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);
  const [refresh, setRefresh] = useState(false);
  const [works, setWorks] = useState({
    status: "not_fetch",
    workArr: [],
  });
  useEffect(() => {
    setWorks({ status: "not_fetch", workArr: [] });
    fetch("http://localhost:5000/works")
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
        if (res.status === "success") {
          setWorks({ status: "fetch", workArr: res.result })
        }
      })
      .catch((err) => {
        createNotification(
          "warning",
          "Data Load failed",
          "check internet connection or something else!"
        )
        setWorks({ status: "fetch_failed", workArr: [] });
      });
  }, [refresh,changeFetch.workList]);
  //Delete Client Reviews
  const delteIcon = (id) => {
    fetch(`http://localhost:5000/delete_work/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        if (result.status) {
          setChangeFetch({
            ...changeFetch,
            workList: !changeFetch.workList,
          });
          createNotification("success", result.message);
        } else {
          createNotification("error", result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  console.log({ works });
  return (
    <div className="table-responsive">
      <div className="table-wrapper">
        <h2 className="text-left">All works on Front</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-head-row">
              <th>No.</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {works &&
              works.workArr.map((work, ind) => (
                <tr key={work._id}>
                  <td>{ind + 1}</td>
                  <td style={{ width: "11rem" }}>
                    <img
                      style={{  height: "100px",borderRadius:'0px' }}
                      src={`http://localhost:5000/${work.fileName}`}
                      className="avatar"
                      alt="work_image"
                    />{" "}
                  </td>
                  <td>
                    <span onClick={() => delteIcon(work._id)}>
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
        {works.status === "not_fetch" && (
          <div className="img text-muted">
            <img className="img-fluid" src={spinner} alt="spinner" />
            <h5>Loding</h5>
          </div>
        )}
        {works.status === "fetch_failed" && (
          <button
            onClick={() => {
              setRefresh((prv) => !prv);
              setWorks({ status: "not_fetch", workArr: [] });
            }}
            className="d-flex aling-items-center btn btn-warning text-muted border justify-content-center"
          >
            <HiOutlineRefresh />
            <span>Click to Refresh</span>
          </button>
        )}
        {works.status === "fetch" &&
          JSON.stringify(works.workArr) === "[]" && (
            <div className="m-auto text-muted">
              <FaDatabase style={fileIconSize} />
              <h5>No Data Found!</h5>
            </div>
          )}
      </div>
    </div>
  );
};

export default WorksList;

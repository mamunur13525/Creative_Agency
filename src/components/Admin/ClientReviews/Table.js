import React, { useContext } from "react";
import "./Table.css";
import { IoClose } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import spinner from "../../../images/icons/spinner.gif";
import { ChangeFindContext } from "../../../App";
import { createNotification } from "../../Shared/Notify";
const fileIconSize = {
  fontSize: "2.4rem",
};

const Table = ({ clientsReview }) => {
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);

  //Delete Client Reviews
  const delteIcon = (id) => {
    fetch(`http://localhost:5000/delete_client_review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setChangeFetch({
            ...changeFetch,
            clientReview: !changeFetch.clientReview,
          });
          createNotification("success", result.message);
        } else {
          createNotification("error", result.message);
        }
      });
  };
  return (
    <div className="table-responsive my-0">
      <div className="table-wrapper">
        <h2 className="text-left">Clients Reviews</h2>
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
            {clientsReview &&
              clientsReview.resultArr.map((client, ind) => (
                <tr key={client._id}>
                  <td>{ind + 1}</td>
                  <td style={{ width: "11rem" }}>
                    <img
                      style={{ width: "30px" }}
                      src={client.img}
                      className="avatar"
                      alt="client_image"
                    />{" "}
                    {client.name}
                  </td>
                  <td>{client.work}</td>
                  <td>{client.description}</td>
                  <td>
                    <span onClick={() => delteIcon(client._id)}>
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
        {clientsReview.status === "not_fetch" && (
          <div className="img text-muted">
            <img className="img-fluid" src={spinner} alt="spinner" />
            <h5>Loding</h5>
          </div>
        )}
        {clientsReview.status === "fetch" &&
          JSON.stringify(clientsReview.resultArr) === "[]" && (
            <div className="m-auto text-muted">
              <FaDatabase style={fileIconSize} />
              <h5>No Data Found!</h5>
            </div>
          )}
      </div>
    </div>
  );
};

export default Table;

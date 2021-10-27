import React, { useEffect, useState, useContext } from "react";
import "../../Servicelist/Servicelist.css";
import AdminSidebar from "../../Shared/AdminSidebar";
import { ChangeFindContext } from "../../../App";
import Table from "./Table";
import NotFound from "../../NotFound";
import useLocalStorage from "../../../Service/useLocalStorage";

const ClientReviews = () => {
  const [changeFetch] = useContext(ChangeFindContext);
  const [loggedInUser, setLoggedInUser] = useLocalStorage("userInfo");

  const [clientsReview, setClientReview] = useState({
    status: "not_fetch",
    resultArr: [],
  });
  //Review Data from Client
  useEffect(() => {
    setClientReview({ status: "not_fetch", resultArr: [] });
    fetch("http://localhost:5000/clientFeedback")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClientReview({ status: "fetch", resultArr: result });
      });
  }, [changeFetch.clientReview]);
  return !loggedInUser.admin ? (
    <NotFound />
  ) : (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Client Reviews Showing Front Page List</h4>
          <div className="formbox">
            <div className="detail row pt-0">
              <div className="outsideTable">
                {clientsReview && <Table clientsReview={clientsReview} />}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ClientReviews;

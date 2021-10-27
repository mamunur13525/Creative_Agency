import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChangeFindContext } from "../../App";
import useLocalStorage from "../../Service/useLocalStorage";
import AdminSidebar from "../Shared/AdminSidebar";
import { createNotification } from "../Shared/Notify";
import NotFound from '../NotFound'
const Review = () => {
  const [loggedInUser] = useLocalStorage("userInfo", {});
  const { register, handleSubmit } = useForm();
  const [changeFetch, setChangeFetch] = useContext(ChangeFindContext);
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
  //Create a New Review from a client.
  const onSubmit = (data) => {
    data.img = loggedInUser.photoURL;
    fetch("http://localhost:5000/client", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setChangeFetch({
          ...changeFetch,
          clientReview: !changeFetch.clientReview,
        });
        createNotification("success", "Thanks For Your Review??");
      });
  };

  return loggedInUser.admin ? (
    <NotFound />
  ) : (
    <>
      <div style={{ background: "yellow" }}>
        <header className="header d-flex">
          <AdminSidebar />
          <div className="main">
            <h4>Review Our Services</h4>
            <div className="formbox">
              <div className="detail w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    ref={register}
                    placeholder="Your name"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                  <input
                    ref={register}
                    placeholder="Compoany'name and Designation"
                    type="text"
                    name="work"
                    id="work"
                    required
                  />
                  <textarea
                    ref={register}
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    id="textarea"
                    rows="4"
                    required
                  ></textarea>
                  <input
                    className="btn w-25 btnSubmit btn-dark btn_custom"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Review;

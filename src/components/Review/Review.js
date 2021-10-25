import React from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../Service/useLocalStorage";
import AdminSidebar from "../Shared/AdminSidebar";

const Review = () => {
  const [loggedInUser] = useLocalStorage("userInfo", {});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.img = loggedInUser.photoURL;
    fetch("http://localhost:5000/client", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert("Thanks For Your Review??"));
  };

  return (
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
                    name=""
                    id=""
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

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Order.css";
import {  useHistory } from "react-router-dom";
import { ContentContext } from "../../App";
import AdminSidebar from "../Shared/AdminSidebar";
import useLocalStorage from "../../Service/useLocalStorage";

const Order = () => {
  const [loggedInUser] = useLocalStorage("userInfo", {});
  const [content] = useContext(ContentContext);
  const [service, setService] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/id?id=${loggedInUser.id}`)
    // .then(res => res.json())
    // .then(data => {
    //     const {title, description,img} = data;
    //     setService({...loggedInUser,title, description,img})
    // })
  }, []);

  const history = useHistory();

  /* for Form Data  */
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    const { img } = content;
    const defaultImgLink = "https://i.ibb.co/3pLfQSf/service3.png";
    const image = img || defaultImgLink;
    const newData = { ...data, image };
    fetch("http://localhost:5000/ordered", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Thanks For Your Order?");
          history.replace("/servicelist");
        }
      });
  };

  return (
    <div style={{ background: "yellow" }}>
      <header className="header d-flex">
        <AdminSidebar />
        <div className="main">
          <h4>Pleace Order Now</h4>
          <div className="formbox">
            <div className="detail w-50 ml-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  ref={register}
                  placeholder="Your name/ company's name"
                  defaultValue={service.displayName}
                  type="text"
                  name="name"
                  id="name"
                />
                <input
                  ref={register}
                  placeholder="Your email address"
                  value={loggedInUser.email}
                  type="text"
                  name="email"
                  id="email"
                  readOnly
                />
                <input
                  ref={register}
                  placeholder="Your Order"
                  type="text"
                  value={service.title || "Web Development"}
                  name="work"
                  id="work"
                  readOnly
                />
                <textarea
                  ref={register}
                  className="form-control"
                  placeholder="Products Details"
                  name="description"
                  id="textarea"
                  rows="4"
                  required
                ></textarea>
                <div className="d-flex pricendfile">
                  <input
                    placeholder="Price"
                    type="number"
                    min="0"
                    name="price"
                    id="price"
                    required
                  />
                  <input
                    className="btn btn-outline-success"
                    type="file"
                    name="file"
                    id=""
                  />
                </div>
                <input
                  className="btn w-25 btnSubmit btn-dark btn_custom"
                  type="submit"
                  value="Submit"
                  name="submit"
                  id=""
                />
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Order;

import React from "react";

const Client = ({ client, slider }) => {
  return (
    <div key={client._id} className={slider ? "col-md-12 " : "col-md-6 "}>
      <div className="shadow  bg-white rounded border mx-3 mb-3 p-3">
        <div className="d-flex">
          <img className="customar" src={client.img} alt="" />
          <div className="title">
            <h5>{client.name}</h5>
            <h6>{client.work}</h6>
          </div>
        </div>
        <p className="text-left">{client.description}</p>
      </div>
    </div>
  );
};

export default Client;

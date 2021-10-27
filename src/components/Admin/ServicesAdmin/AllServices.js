import React from "react";
import { createNotification } from "../../Shared/Notify";

const AllServices = ({ services }) => {
  const handleChange = (event, serviceid) => {
    const status = { status: `${event.target.value}` };

    fetch(`http://localhost:5000/order?id=${serviceid}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.success){
        createNotification('success','SuccessFully',data.message)
      }else{
        createNotification('error','Failed',data.message)
      }
    })
    .catch(err=> createNotification('error','Failed','Something went worng!'))
  };
  return (
    <tr>
      <td style={{width:"100px"}}>{services.name}</td>
      <td>{services.email}</td>
      <td>{services.work}</td>
      <td className="w-25">{services.description}</td>
      <td className="td-actions ">
        <select
          className="selecOption"
          defaultValue={services.status}
          onChange={(event) => handleChange(event, services._id)}
        >
          <option>Pending</option>
          <option>On Going</option>
          <option>Done</option>
        </select>
      </td>
    </tr>
  );
};

export default AllServices;

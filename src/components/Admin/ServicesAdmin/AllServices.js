import React from "react";

const AllServices = ({ services }) => {
  const handleChange = (event, serviceid) => {
    const status = { status: `${event.target.value}` };

    fetch(`http://localhost:5000/id?id=${serviceid}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    });
  };
  return (
    <tr>
      <td>{services.name}</td>
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

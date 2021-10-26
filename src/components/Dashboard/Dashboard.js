import React, {  useEffect, useState } from "react";

import ServicesAdmin from "../Admin/ServicesAdmin/ServicesAdmin";
import Order from "../Order/Order";

const Dashboard = () => {
  const [varify, setVarify] = useState();

  useEffect(() => {
    // fetch(`http://localhost:5000/getAdmin?email=${loggedIn.email}`)
    // .then(res => res.json())
    // .then(result => {
    //     setVarify(result)
    // })
  }, []);
  console.log(varify);

  return <>{varify ? <ServicesAdmin></ServicesAdmin> : <Order></Order>}</>;
};

export default Dashboard;

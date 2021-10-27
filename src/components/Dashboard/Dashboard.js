import React from "react";
import {  useHistory } from "react-router";
import useLocalStorage from "../../Service/useLocalStorage";

const Dashboard = () => {
  const { push } = useHistory();
  const [loggedInUser] = useLocalStorage("userInfo");

  if (loggedInUser.admin) {
    push("/admin/addservice");
  } else {
    push("/order");
  }

  return null;
};

export default Dashboard;

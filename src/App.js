import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Servicelist from "./components/Servicelist/Servicelist";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Review from "./components/Review/Review";
import ServicesAdmin from "./components/Admin/ServicesAdmin/ServicesAdmin";
import Addservice from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Dashboard from "./components/Dashboard/Dashboard";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
export const ChangeFindContext = createContext();
export const ContentContext = createContext();

function App() {
  const [changeFetch, setChangeFetch] = useState({clientReview:false});
  const [content, setContent] = useState([]);

  return (
    <ChangeFindContext.Provider value={[changeFetch, setChangeFetch]}>
      <ContentContext.Provider value={[content, setContent]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/servicelist">
              <Servicelist></Servicelist>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/admin/servicelist">
              <ServicesAdmin></ServicesAdmin>
            </Route>
            <Route path="/admin/addservice">
              <Addservice></Addservice>
            </Route>
            <Route path="/admin/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ContentContext.Provider>
      <NotificationContainer />
    </ChangeFindContext.Provider>
  );
}

export default App;

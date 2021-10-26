import React from "react";
import { Redirect, Route } from "react-router-dom";
import useLocalStorage from "../../Service/useLocalStorage";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useLocalStorage("userInfo", {});

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

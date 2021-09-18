import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ children, ...rest }) {
  const email = sessionStorage.getItem("email");
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
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
}

export default PrivateRoute;
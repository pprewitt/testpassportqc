import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";


const SecuredRoute = (props) => {
  
  const { component: Component, path, loggedIn  } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (loggedIn) {
          return<Redirect to="/signin" />;
          
        }
        return <Component />;
      }}
    />
  );
};
export default SecuredRoute;
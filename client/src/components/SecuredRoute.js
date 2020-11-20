import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";


const SecuredRoute = (props) => {
  const { component: Component, path, user } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (!user) {
          return<Redirect to="/signin" />;
          
        }
        return <Component />;
      }}
    />
  );
};
export default SecuredRoute;
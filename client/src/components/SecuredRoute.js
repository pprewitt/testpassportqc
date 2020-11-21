import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

const SecuredRoute = (props) => {
    const {userContext, setUserContext} = useContext(UserContext);
    const { component: Component, path, ...otherProps } = props;
    return (
        <Route
            {...otherProps}
            path={path}
            render={(props) => {
                return userContext.loggedIn ? <Component {...props} /> : <Redirect to="/signin"/>
            }}
        />
    );
};
export default SecuredRoute;

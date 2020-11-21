import React, { Component, useEffect, useState, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import NewSnip from "./pages/newsnip";
import NoPage from "./pages/nopage";
import Feed from "./pages/feed";
import "./avatars.json";
import UserContext from "./utils/UserContext";
import SecuredRoute from "./components/SecuredRoute";

function App() {
    const [userContext, setUserContext] = useState({});

    return (
        <UserContext.Provider value={{userContext, setUserContext}}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <SecuredRoute exact path="/" component={Profile} />
                        <Route exact path="/signin">
                            <SignIn />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/newsnip">
                            <NewSnip />
                        </Route>
                        <Route exact path="/feed">
                            <Feed />
                        </Route>
                        <Route>
                            <NoPage />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;

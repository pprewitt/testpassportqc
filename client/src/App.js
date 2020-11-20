import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import NewSnip from './pages/newsnip';
import NoPage from './pages/nopage';
import Feed from './pages/feed';
import SecuredRoute from './components/SecuredRoute';

function App() {

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <SecuredRoute exact 
                    path="/"
                    component={Profile}
                    user={user}>
                        <Profile />
                    </SecuredRoute>
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
    );
}


export default App;

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
import axios from "axios";

class App extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: false,
        username: null
      }
  
      this.getUser = this.getUser.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.updateUser = this.updateUser.bind(this)
    }
  
    componentDidMount() {
      this.getUser()
    }
  
    updateUser (userObject) {
      this.setState(userObject)
    }
  
    getUser() {
      axios.get('/user').then(response => {
        console.log('Get user response: ')
        console.log(response.data)
        if (response.data.user) {
          console.log('Get User: There is a user saved in the server session: ')
  
          this.setState({
            loggedIn: true,
            username: response.data.user.username
          })
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
    }

    
    render(){
        return (
        <BrowserRouter>
            <div>
                <Switch>
                    <SecuredRoute exact 
                    path="/"
                    component={Profile}
                    loggedIn={this.state.loggedIn} />
                    
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <SecuredRoute exact path="/newsnip"
                        component={NewSnip}
                        loggedIn={this.state.loggedIn}
                    />
                    <SecuredRoute exact path="/feed"
                    component={Feed}
                    loggedIn={this.state.loggedIn}
                    />
                        
                    <Route>
                        <NoPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

}
export default App;

import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import UserContext from '../utils/UserContext.js';
import { Redirect, useHistory } from 'react-router-dom';

function SignInCard(){
  const history = useHistory();
  const {userContext, setUserContext} = useContext(UserContext);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      console.log(res);
      setUserContext(res.data);
      history.push("/");
    });
  };

    return( <div style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center", marginTop: "10%"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '30rem' }}
        className="mb-2"
      >
        <Card.Header>Quik Code Pro</Card.Header>
        <Card.Body>
        <Card.Title>Sign In</Card.Title>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="username" className="inputGroup-sizing-sm"  ></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Username" onChange={(e) => setLoginUsername(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="password"className="inputGroup-sizing-sm"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Password" onChange={(e) => setLoginPassword(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
        <Button onClick={login} className="info">Submit</Button>
        </Card.Body>
      </Card></div>)

}

export default SignInCard
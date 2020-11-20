import React, { useState } from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Avatars from '../avatars.json';
// import AvatarOption from '../components/avatarOp';
import Axios from "axios";

function SignUpCard() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");



  // const [data, setData] = useState(null);


  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,

      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "10%" }}> <Card
      bg="secondary"
      text='white'
      style={{ width: '30rem' }}
      className="mb-2"
    >
      <Card.Header>Quik Code Pro</Card.Header>
      <Card.Body>
        <Card.Title>Sign up</Card.Title>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="username" placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)} className="inputGroup-sizing-sm"></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Username" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="password" 
              onChange={(e) => setRegisterPassword(e.target.value)}

              className="inputGroup-sizing-sm"></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        {/* <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose an Avatar</Form.Label>
          <Form.Control as="select">
            {Avatars.map((item) => (<AvatarOption name={item.name} />))}
          </Form.Control>
        </Form.Group> */}
        <Button onClick={register} className="info">Submit</Button>
      </Card.Body>

    </Card></div>


  );
}

export default SignUpCard;

import Axios from 'axios'
import { support } from 'jquery'
import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class TheNav extends Component {
  constructor(){
    super()
    this.logout = this.logout.bind(this)
  } 
  logout(event){
    event.preventDefault()
    console.log('logging out')
    Axios.post('/user/logout').then(response =>{
      console.log(response.data)
      if (response.status === 200){
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error =>{
      console.log(error)
    })
  }
  render(){
    const loggedIn = this.props.loggedIn;

    return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/"><img src="https://img.icons8.com/color/48/000000/source-code.png"/> QC Pro</Navbar.Brand>
    <Navbar.Collapse className = "justify-content-end">
        <Nav>
    <Nav.Link href="/newsnip">Make New Snip</Nav.Link>
      <Nav.Link href="/feed">Code Feed</Nav.Link>
      <Nav.Link onClick= {this.logout} href="/signin">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}
}
export default TheNav
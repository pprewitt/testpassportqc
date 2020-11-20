import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function TheNav(){
    return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/"><img src="https://img.icons8.com/color/48/000000/source-code.png"/> QC Pro</Navbar.Brand>
    <Navbar.Collapse className = "justify-content-end">
        <Nav>
    <Nav.Link href="/newsnip">Make New Snip</Nav.Link>
      <Nav.Link href="/feed">Code Feed</Nav.Link>
      <Nav.Link href="/signin">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}
export default TheNav
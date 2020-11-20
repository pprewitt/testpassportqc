import React from 'react'
import Card from 'react-bootstrap/Card'

function NoPage(){

    return( <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", marginTop:"10%"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '40rem' }}
        className="mb-2"
      >
        <Card.Body style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"15%"}}>
          <Card.Title style={{fontSize: 30}}>QUIK CODE SAY: </Card.Title>
          <Card.Text>
404 Error Page not Found -<a href="/">Home</a>
          </Card.Text>
          
        </Card.Body>
      </Card></div>)

}
    export default NoPage
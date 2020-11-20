import React from 'react'
import TheNav from '../components/thenav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Editor from '../components/Editor'
function NewSnip(){

    return(<>
    <TheNav/>
    {/* giant ace editor goes here */}
    <Jumbotron>
        <Editor />
        {/* code title goes here */}
        {/* code type input goes here */}
        {/* keywords input goes here */}
        {/* savecode */}
    </Jumbotron>
    {/* jokes @ bottom */}
    </>
    )

}
    export default NewSnip
import React from 'react'
import Card from 'react-bootstrap/Card'
import AceModalGlobal from './codemodalglobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Posts({name, author, language, snip, avatar}){

    return(<Card style={{ width: '100%',  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
 <FontAwesomeIcon icon={avatar} size="3x"></FontAwesomeIcon>
    <Card.Body>
      <Card.Text>
       {author} Created a code snippet Titled {name} click the button to visit it
      </Card.Text>
      <AceModalGlobal name={name} author={author} language={language} snip={snip} avatar={avatar}/>
    </Card.Body>
  </Card>)
}
export default Posts
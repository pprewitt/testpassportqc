import React from 'react'
import TheNav from '../components/thenav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AceModalGlobal from '../components/codemodalglobal'
import Posts from '../components/posts'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'


function Feed(){
const globalexample=[{name:"example 1", author:"Bob", language:"Html",snip:"<p>Hello World</p>"}]

const postsexample=[{name:"example 1", author:"Bob", language:"Html",snip:"<p>Hello World</p>", avatar:faCat}, {name:"example 2", author:"Tim", language:"Html",snip:"<p>Good night moon</p>", avatar:faDog}]

    return(<><TheNav/>
    <Container>
        <Row>
            <Col sm={12} md={4}>
            <Jumbotron style={{marginTop:"10%", display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", textAlign:"center"}}>
            <h4>Global Code Search</h4>
            <Form.Control size="sm" as="select">
                <option>Code type</option>
                <option>Javascript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Mark Down</option>
                <option>Handlebars</option>
            </Form.Control>
            <br />
            <Button>Search</Button>
            <br />
            {globalexample.map(item=>  <><AceModalGlobal name={item.name} snip={item.snip} author={item.author} language={item.language}  /><br /></>)}
            </Jumbotron>
            </Col>
            <Col sm = {12} md={8}>
                <Jumbotron style= {{marginTop:"5%"}}>
                <h2 style= {{textAlign:"center"}}>News Feed:</h2>
                {postsexample.map((item)=><><Posts name={item.name} snip ={item.snip} author ={item.author} language= {item.language} avatar={item.avatar} /><br /></>)}
                </Jumbotron>
            </Col>
        </Row>
    </Container>

    
    </>
    )
}
export default Feed
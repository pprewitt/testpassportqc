import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import ReactAce from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";


function AceModelUser({name, title, props}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Language, setLanguage] = useState("html");

    function languageSelect() {
        setLanguage($("#languageSelect").val());
        console.log("Working?", $("#languageSelect").val())
      }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {name}
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="d-flex">
             <div className="editor">
                 <ReactAce mode={Language} theme="monokai" setReadOnly={false} width={465} />
             </div>
          </div>

          <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder={name} />
          </Form.Group>
          <Form.Control size="sm" as="select" id="languageSelect" onChange={languageSelect}>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="markdown">Mark Down</option>
              <option value="handlebars">Handlebars</option>
          </Form.Control>
          <br />
          <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Keywords" />
          </Form.Group>

          <Form.Control size="sm" as="select">
              <option>Sharing Preferences</option>
              <option>Private</option>
              <option>Public</option>
              <option>Followers only</option>
          </Form.Control>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="primary">Update</Button>
          </Modal.Footer>
        </Modal>
      </>)

}
export default AceModelUser

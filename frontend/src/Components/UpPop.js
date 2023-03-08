import { React,useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function UpPop() {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" onClick={handleShow}>
            Launch Form modal
          </Button>
        </div>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <></>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" href="/">Close Modal</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DelCase.css";
import axios from "axios";

const DelCase=()=>{

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [caseno, setCaseno] = useState('');

    const handleCasenoChange = (event) => {
        setCaseno(event.target.value);
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSuccessMessage(true);
        console.log(caseno);
        axios.delete("http://localhost:8080/delCase/"+caseno);
        };
    return<div class="pang">
        <div className="containers">
        <center><h1>Enter Case No</h1></center>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formcaseNo" class="bonk">
            <Form.Control type="text" placeholder="Enter Case No" value={caseno} onChange={handleCasenoChange} required/>
            </Form.Group>

            <center><Button className='btn-danger' type="submit">
          Delete
        </Button></center>

        {showSuccessMessage && (
            <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
            <h3>Case Deleted Successfully</h3>
            </Alert>
        )}
        </Form>
        </div>
    </div>
}

export default DelCase;
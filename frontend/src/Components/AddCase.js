import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddCase.css";
import axios from "axios";

function AddCase() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [caseno, setCaseno] = useState('');
  const [subname, setSubname] = useState('');
  const [subage,setSubage] = useState('');
  const [subact, setSubact] = useState('');
  const [prievi, setPrievi]= useState('');
  const [secevi, setSecevi] = useState('');
  const [ghoty, setSGhoty] = useState('');
  const [govb, setGovb] = useState('');
  const [stat, setStat] = useState('');
  
  const handleCasenoChange = (event) => {
    setCaseno(event.target.value);
  };

  const handleSubnameChange = (event) => {
    setSubname(event.target.value);
  };

  const handleSubageChange = (event) => {
    setSubage(event.target.value);
  };

  const handleSubactChange = (event) => {
    setSubact(event.target.value);
  };

  const handlePrieviChange = (event) => {
    setPrievi(event.target.value);
  };

  const handleSeceviChange = (event) => {
    setSecevi(event.target.value);
  };

  const handleGhotyChange = (event) => {
    setSGhoty(event.target.value);
  };

  const handleGovbChange = (event) => {
    setGovb(event.target.value);
  };

  const handleStatChange = (event) => {
    setStat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    const paranormal={"caseno":caseno,"subname":subname,"subage":subage,"subact":subact,"prievi":prievi,"secevi":secevi,"ghoty":ghoty,"govb":govb,"stat":stat};
    axios.post("http://localhost:8080/addCaseDetails",paranormal);
    console.log(paranormal);
  };

  return (
    <div className='lol'>
    <div className="container">
      <center><h1>Add Your Investigation</h1></center>
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          New Case Added Successfully
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formcaseNo">
          <Form.Label class="bonk">Case No</Form.Label>
          <Form.Control type="text" placeholder="Enter Case No" value={caseno} onChange={handleCasenoChange} required/>
        </Form.Group>

        <Form.Group controlId="formSubName">
          <Form.Label class="bonk">Subject Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject name" value={subname} onChange={handleSubnameChange} required/>
        </Form.Group>

        <Form.Group controlId="formSubAge">
          <Form.Label class="bonk">Subject Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject Age" value={subage} onChange={handleSubageChange} required/>
        </Form.Group>

        <Form.Group controlId="formSubAct">
          <Form.Label class="bonk">Subject Activity</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject Activity" value={subact} onChange={handleSubactChange} required/>
        </Form.Group>

        <Form.Group controlId="formPriEvi">
          <Form.Label class="bonk">Primary Evidence</Form.Label>
          <Form.Control type="text" placeholder="Enter Primary Evidence" value={prievi} onChange={handlePrieviChange}/>
        </Form.Group>

        <Form.Group controlId="formSecEvi">
          <Form.Label class="bonk">Secondary Evidence</Form.Label>
          <Form.Control type="text" placeholder="Enter Secondary Evidence" value={secevi} onChange={handleSeceviChange}/>
        </Form.Group>

        <Form.Group controlId="formGhoty">
          <Form.Label class="bonk">Ghost Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Ghost Type" value={ghoty} onChange={handleGhotyChange}/>
        </Form.Group>

        <Form.Group controlId="formGovB">
          <Form.Label class="bonk">Governing Body</Form.Label>
          <Form.Control type="text" placeholder="Enter Governing Body" value={govb} onChange={handleGovbChange} required/>
        </Form.Group>

        <Form.Group controlId="formCaseStat" className='pb-3'>
          <Form.Label class="bonk">Case Status</Form.Label>
          <Form.Control type="text" placeholder="Enter Case Status" value={stat} onChange={handleStatChange} required/>
        </Form.Group>
         
        <center><Button className='btn-primary' type="submit">
          Add Case
        </Button></center>
      </Form>
    </div>
</div>
  );
}

export default AddCase ;
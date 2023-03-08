import './AllCases.css' ;
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AllCases=()=>
{
    const nav = useNavigate();
    const [users, setUsers] = useState([])
    // const [caseno, setCaseno] = useState([])

  const fetchData = () => {
    axios.get("http://localhost:8080/getCaseDetails").then(response => {
      setUsers(response.data)
    })
  }

  // const HandleClick = (event) => {
  //   setCaseno(event.target.value);
  //   console.log(caseno);
  // };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div class = "lampa">
       <div class="col-12">


                <div class="card-body">

                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Case No</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">Subject Age</th>
                                <th scope="col">Subject Activity</th>
                                <th scope="col">Primary Evidence</th>
                                <th scope="col">Secondary Evidence</th>
                                <th scope="col">Ghost Type</th>
                                <th scope="col">Governing body</th>
                                <th scope="col">Case Status</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                        {users.length > 0 && (
                            <>
                        {users.map(user => (
                            <tr>
                              <td key={user.caseno}>{user.caseno}</td>
                              <td key={user.caseno}>{user.subname}</td>
                              <td key={user.caseno}>{user.subage}</td>
                              <td key={user.caseno}>{user.subact}</td>
                              <td key={user.caseno}>{user.prievi}</td>
                              <td key={user.caseno}>{user.secevi}</td>
                              <td key={user.caseno}>{user.ghoty}</td>
                              <td key={user.caseno}>{user.govb}</td>
                              <td key={user.caseno}>{user.stat}</td>
                              <td><Button className='btn-danger' type="submit" onClick={() => {axios.delete("http://localhost:8080/delCase/"+user.caseno);window.location.reload();}}>delete</Button></td>
                              <td><Button className='btn-primary' type="submit" onClick={() => nav("/updatecase")}>Edit</Button></td>
                            </tr>
                        ))}
                            </>
                        )}
                        </tbody>

                    </table>

                </div>
        </div>
      
    </div>
  )
}

export default AllCases;
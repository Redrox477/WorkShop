import React, { Component } from 'react';
import './Home.css' ;
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";

const Home=()=>
{
return<div class="wrapper">
<div class="link_wrapper">
  <a href="/getcases" class="get"> All Cases </a>
  <a href="/addcase" class="post">Add New Case</a>
  <a href="updatecase" class="put">Update record</a>
  <a href="/delcase" class="del">Delete record</a>
</div>

</div>
}

export default Home;
import React from 'react'
import {Navbar, Nav,Container} from 'react-bootstrap';

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-black ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#" >
      <img src="/assets/logo-black.png" alt="" width="270" height="50"></img></a>
    <div class="collapse navbar-collapse nav justify-content-center" id="navbarSupportedContent">
      <center>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fst-italic">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="#">Friends</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">For You</a>
        </li>
 
      </ul>
      </center>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search a review/recipe" aria-label="Search"/>
        <button class="btn btn-light" type="submit">Search</button>
      </form>
    
      <a class="navbar-nav justify-content-right" href="#">
      <img src="/assets/profile.jpg" alt="" width="50" height="50" class="rounded-circle "  ></img></a>
    </div>
  </div>
</nav>
  );
}

export default Topbar
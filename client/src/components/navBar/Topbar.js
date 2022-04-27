import React from 'react'


function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-black ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" >
          <img src="/assets/logo-black.png" alt="" width="270" height="50"></img></a>
        <div className="collapse navbar-collapse nav justify-content-center" id="navbarSupportedContent">
          <center>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fst-italic">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">Friends</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">For You</a>
              </li>

            </ul>
          </center>
          <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search a review/recipe" aria-label="Search" />
            <button className="btn btn-light" type="submit">Search</button>
          </form>

          <a className="navbar-nav justify-content-right" href="#">
            <img src="/assets/profile.jpg" alt="" width="50" height="50" className="rounded-circle "  ></img></a>
        </div>
      </div>
    </nav>
  );
}

export default Topbar
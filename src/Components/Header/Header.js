import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link ,NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Your Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className={({isActive})=>` nav-link  ${isActive ? "text-primary" : ""}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "text-primary" : ""}` }to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "text-primary" : ""}`} to="store">
                Store
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <button className='btn btn-dark mx-4'>Cart</button>
    </nav>
  )
}

export default Header

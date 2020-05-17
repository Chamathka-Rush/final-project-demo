import React from 'react';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className="icon-img" src="/images/icon.png"  />
    <Link className="navbar-brand" to="#">BeMyTutor</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/home">Home <span class="sr-only">(current)</span></NavLink>
        <NavLink className="nav-item nav-link" to="/tutors">Tutors</NavLink>
        <NavLink className="nav-item nav-link" to="/subjects">Subjects</NavLink>
        <NavLink className="nav-item nav-link" to="/loginForm">Login</NavLink>
        <NavLink className="nav-item nav-link" to="/registerForm">Register</NavLink>
      </div>
    </div>
  </nav>
   );
}
 
export default Navbar;
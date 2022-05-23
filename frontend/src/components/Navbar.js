import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="navbar-brand" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="navbar-brand" to="/problems">Solved-Problems</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="navbar-brand" to="/add-problems">Add-Problems</NavLink>
          </li>
        </ul>
        {!localStorage.getItem('token') ? <form className="d-flex">
          <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
          <NavLink className="btn btn-primary mx-1" to="/signup" role="button">Signup</NavLink>
        </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
      </div>
    </div>
  </nav>
}


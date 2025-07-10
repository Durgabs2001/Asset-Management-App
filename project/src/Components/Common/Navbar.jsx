import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100" style={{ position: 'relative', width: '100%' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ASSET BOOKING</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                to="/"
                                className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold text-decoration-underline" : "")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/features"
                                className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold text-decoration-underline" : "")}
                            >
                                Features
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold text-decoration-underline" : "")}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold text-decoration-underline" : "")}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ marginLeft: "auto", marginRight: "10px" }}>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
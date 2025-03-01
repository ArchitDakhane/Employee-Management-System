import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg">
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" to="/">MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-2 rounded hover-effect" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-2 rounded hover-effect" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-2 rounded hover-effect" to="/showdata">Show Data</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

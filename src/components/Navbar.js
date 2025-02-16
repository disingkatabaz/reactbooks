import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">📚 Perpus</Link>
                <Link to="/add" className="btn btn-primary">+ Add Book</Link>
            </div>
        </nav>
    );
};

export default Navbar;

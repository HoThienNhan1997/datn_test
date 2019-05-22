import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo" style={{ textDecoration: 'none' }}>Ushare admin</Link>
            </div>
        </nav>
    )
}

export default NavBar;
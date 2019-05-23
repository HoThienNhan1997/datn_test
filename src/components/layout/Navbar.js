import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ushare</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Quản lý nhóm</Link></li>
                    <li><Link to='/'>Option 2</Link></li>
                    <li><Link to='/'>Option 3</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
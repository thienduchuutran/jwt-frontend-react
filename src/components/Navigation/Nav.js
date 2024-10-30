import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = (props) => {
    return (
        <div className='topnav'>
            <NavLink className="active" to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Nav;
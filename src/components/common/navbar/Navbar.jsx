import React from 'react';
import { NavLink } from "react-router-dom";

import './Navbar.css'

function Navbar () {
    return (
        <section className="navbar">
            <NavLink to="/login" className={"navbar-item-log"}>LOG IN</NavLink>
            <NavLink to="/signup" className={"navbar-item-sign"}>SIGN UP</NavLink>
        </section>
    )
}

export default Navbar;
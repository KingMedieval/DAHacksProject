import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header() {
    return (
        <section className="header">
            <a href="./" className="logo-title">MOMENTUM</a>
            <a className="box"></a>
            <section className="header-top">
                <section className="header-top_logo">
                    <a href="/" className = "header-logo">
                        <img src="https://cdn.discordapp.com/attachments/1027411637591875624/1028282894306770944/Untitled_design_3.png" className="logo"></img>
                    </a>
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
            </section>
        </section>
    )
}

export default Header;
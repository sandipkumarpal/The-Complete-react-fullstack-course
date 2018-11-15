import React from 'react';

import Logo from './Logo';
import NavBar from './NavBar';

import '../css/components/Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="headerOpt">
                <NavBar />
                <Logo />
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import Logo from '../components/Logo';
import HeaderNav from '../components/HeaderNav';
import SideNavigation from './Sidenavigation';

import Nbalogo from '../assets/images/nba_logo.png';

function Header(props) {
    return (
        <header className="header">
            <SideNavigation {...props} />
            <div className="header__opt">
                <HeaderNav onShowNav={props.onShowNav}/>
                <Logo
                    link="/"
                    src={Nbalogo}
                    title="NBA Aplication"
                    className="header__logo"
                />
            </div>
        </header>
    );
}

export default Header;

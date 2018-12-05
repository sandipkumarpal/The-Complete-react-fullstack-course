import React from 'react';
import Logo from './Logo';

import {CURRENT_YEAR} from '../constants/appConstants';
import Nbalogo from '../assets/images/nba_logo.png';

function Footer() {
    return (
        <footer className="footer">
            <Logo
                link="/"
                src={Nbalogo}
                title="NBA Aplication"
                className="footer__logo"
            />
            <div className="footer__right">
                &copy; {CURRENT_YEAR} All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
import React from 'react';
import '../css/components/Logo.css';
import { Link } from 'react-router-dom';

function Logo(props) {
    return (
        <Link to="/" className="logo">
            <img alt="NBA Logo" src="/images/nba_logo.png" />
        </Link>
    );
}

export default Logo;

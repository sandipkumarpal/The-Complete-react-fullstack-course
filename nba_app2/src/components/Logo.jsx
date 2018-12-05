import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
    return (
        <Link to={props.link} className={props.className}>
            <img src={props.src} alt={props.title} />
        </Link>
    );
}

export default Logo;

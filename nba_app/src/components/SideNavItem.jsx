import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

function SideNavItems(props) {
    return (
        <div className="navItems">
            <Link to={props.path}>
                {props.icon ? <FontAwesome name={props.icon}/> : null}
                {props.title || ''}
            </Link>
        </div>
    );
}

export default SideNavItems;

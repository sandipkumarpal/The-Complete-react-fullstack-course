import React from 'react';
import FontAwesome from 'react-fontawesome';

function HeaderNav(props) {
    return (
        <div className="header__bars">
            <FontAwesome 
                name="bars"
                onClick={props.onShowNav}
            />
        </div>
    );
}

export default HeaderNav;

import React from 'react';

import FontAwesome from 'react-fontawesome';

function NavBar(props) {
    return (
        <div className="bars">
            <FontAwesome 
                name="bars"
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    );
}

export default NavBar;

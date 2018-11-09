import React from 'react';

function Card(props) {
    console.log(props);
    return (
        <div>
            Card <br/>
            {props.children}
        </div>
    )
}

export default Card;

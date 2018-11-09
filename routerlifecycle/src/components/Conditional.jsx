import React from 'react';

function Conditional(props) {
    console.log(props.match.params.id);
    return (
        <div>Conditional {props.match.params.id}</div>
    )
}

export default Conditional;

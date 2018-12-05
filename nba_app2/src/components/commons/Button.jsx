import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    let template = null;

    switch(props.type) {
        case 'loadmore':
            template = <button
            type={props.type}
            onClick={props.buttonClick}
            className={`button ${props.className || ''}`}
        >
            {props.text}
        </button>;
            break;
        
        case 'linkTo':
            template = <Link
            type={props.type}
            to={props.buttonClick}
            className={`button ${props.className || ''}`}
        >
            {props.text}
        </Link>;
            break;

        default:
            template = null;
    }
    return template;
}

export default Button;

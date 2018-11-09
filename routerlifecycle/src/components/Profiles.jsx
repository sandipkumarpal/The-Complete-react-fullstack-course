import React from 'react';
import {Link, Redirect } from 'react-router-dom';

function Profiles(props) {
    console.log(props);
    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Go to Profiles posts</Link>
            <Redirect to="/"/>
        </div>
    )
}

export default Profiles;

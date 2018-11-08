import React from 'react';
import Link from 'react-router-dom/Link';

function Profiles(props) {
    console.log(props);
    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Go to Profiles posts</Link>
        </div>
    )
}

export default Profiles;

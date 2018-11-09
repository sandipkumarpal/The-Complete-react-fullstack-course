import React from 'react';
import {Link } from 'react-router-dom';

import Card from '../hoc/Card';
import Auth from '../hoc/Auth';

function Profiles(props) {
    console.log(props);
    return (
        <Auth>
            <Card>
                <Link to={{
                    pathname: `${props.match.url}/posts`
                }}>Go to Profiles posts</Link>
            </Card>
        </Auth>
    )
}

export default Profiles;

import React from 'react';
import { Link } from 'react-router-dom';

function Posts(props) {
    return (
        <div>
            <Link to="/posts/1">Posts 1</Link>
            <Link to="/posts/2">Posts 2</Link>
            <Link to="/posts/3">Posts 3</Link>
        </div>
    )
}

export default Posts;

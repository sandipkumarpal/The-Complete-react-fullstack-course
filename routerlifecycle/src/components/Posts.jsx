import React from 'react';
import { Link } from 'react-router-dom';

function Posts(props) {
    const ids =[
        {id:1, name:'Posts 01'},
        {id:2, name:'Posts 02'},
        {id:3, name:'Posts 03'}
    ];
    const lists = ids.map(items => <Link key={items.id} to={`posts/${items.id}`}>{items.name}</Link>);
    return ["Sandip", "Rayel"];
}

export default Posts;

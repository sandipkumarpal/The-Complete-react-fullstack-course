import React from 'react';

function PostItem(props) {
    console.log(props.match.params.id);
    return (
        <div>PostItem {props.match.params.id}</div>
    )
}

export default PostItem;

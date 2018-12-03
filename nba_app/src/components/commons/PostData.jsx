import React from 'react';

function PostData(props) {
    return (
        <div className="article-Wrapper__postData">
            <div>
                Date: 
                <span>{props.data.date}</span>
            </div>
            <div>
                Author: 
                <span>{props.data.author}</span>
            </div>
        </div>
    );
}

export default PostData;

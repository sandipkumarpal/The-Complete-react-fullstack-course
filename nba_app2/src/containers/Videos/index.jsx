import React from 'react';
import VideoLists from "./VideoLists";

function Videos () {
    return (
        <div>
            <VideoLists
                type="card"
                title={true}
                loadMore={false}
                start={0}
                amount={10} 
            />
        </div>
    );
}

export default Videos;

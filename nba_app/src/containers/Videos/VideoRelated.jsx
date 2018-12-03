import React from 'react';
import VideosListTemplate from '../../components/VideosListTemplate';

function VideoRelated (props) {
    return(
        <div className="related-wrapper">
            <VideosListTemplate
                data={props.data} 
                teams={props.teams}
            />
        </div>
    );
}

export default VideoRelated;

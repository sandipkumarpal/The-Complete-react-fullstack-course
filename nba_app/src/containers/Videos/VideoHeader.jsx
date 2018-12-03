import React from 'react';
import TeamInfo from '../../components/commons/TeamInfo';
import PostData from '../../components/commons/PostData';

class VideoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.teamInfo = this.teamInfo.bind(this);
        this.postData = this.postData.bind(this);
    }

    teamInfo(team) {
        return team ? (
            <TeamInfo team={team}/>
        ) : null;
    }

    postData(date, author) {
        return <PostData data={{date, author}}/>
    }
    render() {
        return (
            <div className="article-Wrapper__header">
                {this.teamInfo(this.props.teamData)}
                {
                    this.props.date || this.props.author ? 
                    this.postData(this.props.date, this.props.author) 
                    : null
                }
            </div>
        );
    }
}

export default VideoHeader;

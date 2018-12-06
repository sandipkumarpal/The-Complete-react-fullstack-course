import React from 'react';

import VideoHeader from './VideoHeader';
import VideoRelated from './VideoRelated';

import { firebaseDB, firebaseTeams, firebaseVideos, firebaseLooper } from '../../firebase';

class VideosSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            teams:[],
            team: [],
            related: []
        }
        this.getRelated = this.getRelated.bind(this);
    }

    componentWillMount() {
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
            .then(snapshot => {
                let video = snapshot.val();
                firebaseTeams.orderByChild('teamId').equalTo(video.team).once('value')
                .then(snapshot => {
                    const team = firebaseLooper(snapshot);
                    this.setState({
                        video,
                        team
                    });
                    this.getRelated();
                })
            });
    }

    getRelated() {
        firebaseTeams.once('value')
            .then(snapshot => {
                const teams = firebaseLooper(snapshot);

                firebaseVideos.orderByChild('team')
                .equalTo(this.state.video.team).limitToFirst(3).once('value')
                .then(snapshot => {
                    const related = firebaseLooper(snapshot);
                    this.setState({ teams, related });
                })
            })
    }

    render() {
        const {video, team, related} = this.state;
        console.log(video)
        return (
            <div className="video-Wrapper">
                <VideoHeader
                    teamData={team[0]}
                    // date={video.date}
                    // author={video.author}
                />
                <div className="video-Wrapper__body">
                    <h1>{video.title}</h1>
                    <iframe 
                        className="video-Wrapper__iframe" 
                        src={`https://youtube.com/embed/${video.url}`} 
                        frameBorder="0"
                        title={video.title}
                    ></iframe>
                </div>
                <VideoRelated
                    data={related}
                    teams={team}
                />
            </div>
        );
    }
}

export default VideosSingle;

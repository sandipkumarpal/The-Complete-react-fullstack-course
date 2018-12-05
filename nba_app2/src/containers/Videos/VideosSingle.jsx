import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';
import VideoHeader from './VideoHeader';
import VideoRelated from './VideoRelated';

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
        axios.get(`${API_URL}/videos?id=${this.props.match.params.id}`)
            .then(respose => {
                let video = respose.data[0];
                axios.get(`${API_URL}/teams?id=${video.team}`)
                .then(response => {
                    this.setState(() => ({
                        video,
                        team : response.data,
                    }))
                this.getRelated();
                })
            });
    }

    getRelated() {
        console.log(this.state)
        axios.get(`${API_URL}/teams`)
            .then(response => {
                let teams = response.data;

                axios.get(`${API_URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                    .then(response => {
                        this.setState(() => ({
                            teams,
                            related: response.data
                        }))
                    });
            })
    }

    render() {
        const {video, team, related} = this.state;
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

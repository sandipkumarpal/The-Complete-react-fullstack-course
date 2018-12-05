import React from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

import Button from '../../components/commons/Button';
import VideosListTemplate from '../../components/VideosListTemplate';

import { firebaseTeams, firebaseVideos, firebaseLooper } from '../../firebase';

class VideoLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            videos: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }
        this.requestData = this.requestData.bind(this);
        this.renderVideo = this.renderVideo.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.requestData(this.state.start, this.state.end);
    }

    requestData(start, end) {
        if(this.state.teams.length < 1) {
            firebaseTeams.once('value')
            .then(snapshot => {
                const teams = firebaseLooper(snapshot);
                this.setState({ teams });
            });
        }

        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
            .then(snapshot => {
                const videos = firebaseLooper(snapshot);
                this.setState({
                    videos: [...this.state.videos, ...videos],
                    start,
                    end
                });
            });
    }

    renderVideo() {
        let template = null;
        switch(this.props.type) {
            case('card'):
                template = (
                    <CSSTransition
                        classNames={{
                            enter: 'videoList__wrapper',
                            enterActive: 'videoList__wrapper--enter',
                        }}
                        timeout={500}
                    >
                        <VideosListTemplate 
                                data={this.state.videos} 
                                teams={this.state.teams}
                            />
                    </CSSTransition>);
                break;
            default:
                template = null;
        }
        return template;
    }

    renderTitle(title) {
        return title ? 
            <h3><strong>NBA</strong> Videos</h3>
        : null;
    }

    loadMore() {
        const ended = this.state.end + this.state.amount;
        this.requestData(this.state.end, ended);
    }

    renderButton() {
        return this.props.loadMore ? 
            <Button 
                type="loadmore"
                buttonClick={this.loadMore}
                text="Load More Video"
                className="button--blue button--block"
            />
            :
            <Button 
                type="linkTo" 
                buttonClick="/videos" 
                text="More Video"
                className="button--blue button--block"/>
    }
    render() {
        return (
            <div className="VideoLists">
                {this.renderTitle(this.props.title)}
                <TransitionGroup 
                    component="div"
                    className="list"
                    > 
                        {this.renderVideo()}
                </TransitionGroup>
                {this.renderButton()}
            </div>
        );
    }
}

export default VideoLists;

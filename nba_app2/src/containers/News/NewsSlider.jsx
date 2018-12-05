import React from 'react';

import SliderTemplate from './SliderTemplate';
import { firebaseArticles, firebaseLooper } from '../../firebase';

class NewsSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentWillMount() {
        firebaseArticles.limitToFirst(this.props.amount).once('value')
        .then((snapshot) => {
            const news = firebaseLooper(snapshot);
            this.setState ({ news });
        });
    }

    render() {
        return (
            <SliderTemplate 
                data={this.state.news} 
                type={this.props.type}
                settings={this.props.settings}
            />
        );
    }
}

export default NewsSlider;

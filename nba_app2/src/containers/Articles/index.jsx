import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

import ArticleHeader from './ArticleHeader';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            team: []
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/articles?id=${this.props.match.params.id}`)
            .then(response => {
                let article = response.data[0];
                axios.get(`${API_URL}/teams?id=${article.team}`)
                    .then(response => {
                        this.setState(() => ({
                            article,
                            team : response.data
                        }))
                        
                    })
            })
    }
    render() {
        const {article, team} = this.state;
        return (
            <div className="article-Wrapper">
                <ArticleHeader
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className="article-Wrapper__body">
                    <h1>{article.title}</h1>
                    <div className="article-Wrapper--image"
                        style={{
                            backgroundImage: `url('/assets/images/articles/${article.image}')`
                        }}
                    ></div>
                    <div className="article-Wrapper--text">
                        {article.body}
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;

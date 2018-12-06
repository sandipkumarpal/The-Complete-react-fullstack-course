import React from 'react';

import { firebaseDB, firebaseLooper, firebaseTeams } from '../../firebase';
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
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
            .then(snapshot => {
                const article = snapshot.val();
                firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
                    .then(snapshot => {
                        const team = firebaseLooper(snapshot);
                        this.setState({
                            article,
                            team
                        })
                    })
            });
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

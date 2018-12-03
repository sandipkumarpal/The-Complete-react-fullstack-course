import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants'; 

import Button from '../../components/commons/Button';
import CardInfo from "../../components/commons/CardInfo";

class NewsLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            items: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount,
        }
        this.renderNews = this.renderNews.bind(this);
        this.requestData = this.requestData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.requestData(this.state.start, this.state.end);
    }

    requestData(start, end) {
        if(this.state.teams.length < 1) {
            axios.get(`${API_URL}/teams`)
                .then(response => {
                    this.setState(() =>({
                        teams: response.data
                    }))
                });
        }
        axios.get(`${API_URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState(() => ({
                items: [...this.state.items, ...response.data],
                start,
                end
            }));
        });
    }

    renderNews(type) {
        let template = null;
        switch(type) {
            case('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: 'newsList__wrapper',
                            enterActive: 'newsList__wrapper--enter',
                       }}
                       timeout={500}
                       key={i}
                    >
                        <div className="newsList__item" >
                            <div className="newsList__itemBlock">
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo 
                                        teams={this.state.teams} 
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            case('news'):
            template = this.state.items.map((item, i) => (
                <CSSTransition
                    classNames={{
                        enter: 'newsList__wrapper',
                        enterActive: 'newsList__wrapper--enter',
                }}
                timeout={500}
                key={i}
                >   
                    <Link to={`/articles/${item.id}`}>
                        <div className="news__item" >
                            <div className="news__itemBlock">
                                <div 
                                    className="news__left"
                                    style={{
                                        backgroundImage: `url('assets/images/articles/${item.image}')`
                                    }}
                                >
                                    <div></div>
                                </div>
                                <div className="news__right">
                                    <CardInfo 
                                        teams={this.state.teams} 
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </CSSTransition>
            ));
            break;

            default:
                template = null;
        }
        return template;
    }

    loadMore() {
        const ended = this.state.end + this.state.amount;
        this.requestData(this.state.end, ended);
    }

    render() {
        return (
            <div className="newsList">
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button 
                    type="loadmore"
                    buttonClick={this.loadMore}
                    text="Load More News"
                    className="button--blue button--block"
                />
            </div>
        );
    }
}

export default NewsLists;

import React from 'react';
import { Link } from 'react-router-dom';
import CardInfo from './commons/CardInfo';
import playImage from '../assets/images/play.png';

function VideosListTemplate(props) {
    return props.data.map((item, i) => (  
        <div key={i}>
            <Link to={`/videos/${item.id}`}>
                <div className="videoList__item" >
                    <div className="videoList__itemBlock">
                        <div 
                            className="videoList__left" 
                            style={{backgroundImage: `url(/assets/images/videos/${item.image})`}}
                        >
                            <div style={{backgroundImage: `url(${playImage})`}}></div>
                        </div>
                        <div className="videoList__right">
                            <CardInfo 
                                teams={props.teams} 
                                team={item.team}
                                date={item.date}
                            />
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ));
}

export default VideosListTemplate;

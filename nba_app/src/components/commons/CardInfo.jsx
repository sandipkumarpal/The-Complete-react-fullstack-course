import React from 'react';
import FontAwesome from 'react-fontawesome';

function CardInfo(props) {
    const cardName = (teams, team) => {
        const data  = teams.find((item) => {
            return item.id === team;
        });

        if(data) {
            return data.name;
        }
    }
    return (
        <div className="cardInfo">
            <span className="cardInfo--name">
                {cardName(props.teams, props.team)}
            </span>
            <span className="cardInfo--date">
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    );
}

export default CardInfo;

import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

function CardInfo(props) {
    const cardName = (teams, team) => {
        const data  = teams.find((item) => {
            return item.teamId === team;
        });

        if(data) {
            return data.name;
        }
    }
    const formateDate = (date) => {
        return moment(date).format('MM-DD-YYYY')
    }
    return (
        <div className="cardInfo">
            <span className="cardInfo--name">
                {cardName(props.teams, props.team)}
            </span>
            <span className="cardInfo--date">
                <FontAwesome name="clock-o"/> {formateDate(props.date)}
            </span>
        </div>
    );
}

export default CardInfo;

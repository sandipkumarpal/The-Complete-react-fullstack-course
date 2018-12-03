import React from 'react';

function TeamInfo(props) {
    return (
        <div className="article-Wrapper__info">
            <div className="article-Wrapper__info--left"
                style={{
                    backgroundImage: `url('/assets/images/teams/${props.team.logo}')`
                }}
            ></div>
            <div className="article-Wrapper__info--right">
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default TeamInfo;

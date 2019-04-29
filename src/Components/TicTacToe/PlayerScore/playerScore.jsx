import React from 'react';
import './playerScore.scss';


const playerScore = (props) => {
    return (
        <div
            className="playerScore-wrap">
            <div className="playerScore-container">
                <div className="playerScore-item">
                    {props.name}
                </div>
                <div className="playerScore-item">
            Score: {props.score}
                </div>
                <div className="playerScore-item">
            Wins: {props.wins}
                </div>
                <div className="playerScore-item">
            Loses: {props.loses}
                </div>
            </div>
        </div>
    )};

export default playerScore;

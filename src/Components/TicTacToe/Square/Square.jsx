import React from 'react';
import './Square.scss';

const Square = props => {

    return (
        <div onClick={() => props.handleClick(props.id)} className="square-container">
            {props.symbol}
        </div>
    );
};

export default Square;

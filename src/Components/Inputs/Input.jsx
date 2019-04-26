import React from 'react';
import './Input.scss';

const Input = props => {

    return (
        <div className="input-container">
        <input placeholder={props.placeholder} onChange={(event) => props.handleInput(event.target.value)} name="playerSearch"
        value={props.value}
         className="input" id="" />
         </div>    
    );
}

export default Input;
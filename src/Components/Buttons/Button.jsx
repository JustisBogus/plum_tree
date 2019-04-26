import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <div className="button-wrap">
            <div className="button" onClick={props.onClick}> 
            {props.title} 
            </div>
        </div>
    )}
export default Button;
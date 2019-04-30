import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <div className="button-wrap">
            <div className="button" onClick={props.onClick}> 
                {props.title} 
            </div>
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string,
};

export default Button;

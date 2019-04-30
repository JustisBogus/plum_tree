import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = props => {

    return (
        <div data-test="header-component" 
            className="input-container">
            <input placeholder={props.placeholder} onChange={(event) => props.handleInput(event.target.value)} name="playerSearch"
                value={props.value}
                className="input" id="" />
        </div>    
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleInput: PropTypes.func,
};

export default Input;

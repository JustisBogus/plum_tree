import React from 'react';

const Input = props => {

    return (
        <div>
        <input placeholder="Search For Player" onChange={(event) => props.handlePlayerSearchInput(event.target.value)} name="playerSearch"
        value={props.playerSearch}
         className="" id="" />
         </div>    
    );
}

export default Input;
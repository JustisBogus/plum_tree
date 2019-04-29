import React, { Component } from 'react';
import './Player.scss';

class Player extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        
        };
    }
   
    render() {

        return (
            <div onClick={
                this.props.symbol === 'X' ?
                    () => this.props.playerSelectedX(this.props.id) :
                    () => this.props.playerSelected0(this.props.id)} 
                    className="player-wrap" >
                <div className={this.props.selected === '' ? "player-container" : 
                    (this.props.symbol === this.props.selected ? "player-container-selected" : "player-container")}>
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default Player;

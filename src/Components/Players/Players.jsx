import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Player/Player';
import { selectPlayerX, selectPlayer0 } from '../../store/actions/game';
import './Players.scss';

class Players extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
        }
      }

togglePlayerSelectedX = (id) => {
    let selectedPlayer = this.props.selectedPlayerX;
    let players = [...this.props.players];
    let deselectPlayer = {...players[selectedPlayer]};
    deselectPlayer.selected = '';
    players[selectedPlayer] = deselectPlayer;
    let player = {...players[id]};
    player.selected = 'X';
    players[id] = player;
    console.log(deselectPlayer);
    this.props.onSelectPlayerX(players, id);

}

togglePlayerSelected0 = (id) => {
    let selectedPlayer = this.props.selectedPlayer0;
    let players = [...this.props.players];
    let deselectPlayer = {...players[selectedPlayer]};
    deselectPlayer.selected = '';
    players[selectedPlayer] = deselectPlayer;
    let player = {...players[id]};
    player.selected = '0';
    players[id] = player;
    this.props.onSelectPlayer0(players, id);
}

   
  render() {

    return (
            <React.Fragment>
        <div className="players-wrap">
        <div className="players-title">{this.props.symbol} player</div>
        {this.props.players.map(player => {
                            return <Player 
                                key={player.id}
                                id={player.id}
                                name={player.name}
                                selected={player.selected}
                                playerSelectedX={this.togglePlayerSelectedX}
                                playerSelected0={this.togglePlayerSelected0}
                                symbol={this.props.symbol}
                                 />
                            })}
        </div>
        </React.Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        players: state.game.players,
        selectedPlayerX: state.game.selectedPlayerX,
        selectedPlayer0: state.game.selectedPlayer0,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectPlayerX: (player, id) => dispatch(selectPlayerX(player, id)),
        onSelectPlayer0: (player, id) => dispatch(selectPlayer0(player, id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
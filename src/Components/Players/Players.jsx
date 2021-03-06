import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Player/Player';
import { selectPlayerX, selectPlayer0} from '../../store/actions/game';
import './Players.scss';

class Players extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

togglePlayerSelectedX = (id) => {
    const selectedPlayer = this.props.selectedPlayerX;
    const players = [...this.props.players];
    const deselectPlayer = { ...players[selectedPlayer] };
    deselectPlayer.selected = '';
    players[selectedPlayer] = deselectPlayer;
    const player = {...players[id]};
    player.selected = 'X';
    players[id] = player;
    this.props.onSelectPlayerX(players, id);
}

togglePlayerSelected0 = (id) => {
    const selectedPlayer = this.props.selectedPlayer0;
    const players = [...this.props.players];
    const deselectPlayer = { ...players[selectedPlayer] };
    deselectPlayer.selected = '';
    players[selectedPlayer] = deselectPlayer;
    const player = { ...players[id] };
    player.selected = '0';
    players[id] = player;
    this.props.onSelectPlayer0(players, id);
}
  
render() {
    const filteredPlayers = this.props.players.filter(
        (players) => {
            return players.name.toLowerCase().indexOf(this.props.playerSearch.toLowerCase()) !== -1;
        },
    );

    return (
        <React.Fragment>
            <div className="players-wrap">
                <div className="players-title">{this.props.symbol} player</div>
                {filteredPlayers.map(player => {
                    return (<Player 
                        key={player.id}
                        id={player.id}
                        name={player.name}
                        selected={player.selected}
                        playerSelectedX={this.togglePlayerSelectedX}
                        playerSelected0={this.togglePlayerSelected0}
                        symbol={this.props.symbol}
                    />
                    )})}
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
        playerSearch: state.game.playerSearch,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectPlayerX: (player, id) => dispatch(selectPlayerX(player, id)),
        onSelectPlayer0: (player, id) => dispatch(selectPlayer0(player, id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);

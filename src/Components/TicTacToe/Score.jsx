import React, { Component } from 'react';
import Header from '../Header';
import PlayerScore from './PlayerScore/playerScore';
import { connect } from 'react-redux';
import { selectPlayerX, selectPlayer0 } from '../../store/actions/game';
import './Score.scss';

class Score extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
        }
      }    

  render() {

    return (
            <React.Fragment>
            <Header />
        <div>Score</div>
        <div className="score-container">
        {this.props.players.sort((a,b)=>a.score < b.score).map(player => {
                            return <PlayerScore 
                                key={player.id}
                                id={player.id}
                                name={player.name}
                                score={player.score}
                                wins={player.wins}
                                loses={player.loses}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectPlayerX: (player, id) => dispatch(selectPlayerX(player, id)),
        onSelectPlayer0: (player, id) => dispatch(selectPlayer0(player, id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
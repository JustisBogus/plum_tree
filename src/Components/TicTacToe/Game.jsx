import React, { Component } from 'react';
import Header from '../../Components/Header';
import { connect } from 'react-redux';
import { setGameCompleted, addSymbol, switchTurn } from '../../store/actions/game';
import Square from '../../Components/TicTacToe/Square/Square';
import './Game.scss';
import { gameFunction } from '../../game/gameFunction';
import Players from '../Players/Players';

class Game extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
    
        }
      }

    onGameCompleted = () => {
        this.props.onSetGameCompleted();
    }

    handleSquareClick = (id) => {
        let square = [...this.props.squares]
        let game = gameFunction(id, square, this.props.playerTurn);
        this.props.onAddSymbol(game.squares);
        this.props.onSwitchTurn(game.turn);
        console.log(game.winner);
    }
   
  render() {

    return (
            <React.Fragment>
            <Header />
            <div className="game-container">
            <Players className="player-container-x" symbol="X" />
            <div className="squares-wrap">
            <div>Add a new player</div>
            <div className="squares-container">
            {this.props.squares.map(square => {
                            return <Square 
                                key={square.id}
                                symbol={square.symbol}
                                id={square.id}
                                handleClick={this.handleSquareClick}/>
                            })}
            </div>
            </div>
            <Players className="player-container-0" symbol="0" />
            </div>
            </React.Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        gameCompleted: state.game.gameCompleted,
        squares: state.game.squares,
        playerTurn: state.game.playerTurn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetGameCompleted: () => dispatch(setGameCompleted()),
        onAddSymbol: (symbol) => dispatch(addSymbol(symbol)),
        onSwitchTurn: (playerTurn) => dispatch(switchTurn(playerTurn)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

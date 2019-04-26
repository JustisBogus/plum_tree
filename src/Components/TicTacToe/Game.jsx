import React, { Component } from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import { setGameCompleted, addSymbol, switchTurn, 
    addScore, resetGame, addPlayerName, addPlayer } from '../../store/actions/game';
import Square from './Square/Square';
import './Game.scss';
import { gameFunction } from '../../game/gameFunction';
import Players from '../Players/Players';
import AddPlayer from '../TicTacToe/AddPlayer/AddPlayer';

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
        if(!this.props.gameCompleted) {
        let square = [...this.props.squares]
        let game = gameFunction(id, square, this.props.playerTurn, this.props.players, 
            this.props.selectedPlayerX, this.props.selectedPlayer0);
        if(this.props.selectedPlayerX !== '' && this.props.selectedPlayer0 !== '' 
        && this.props.selectedPlayerX !== this.props.selectedPlayer0) {    
        this.props.onAddSymbol(game.squares);
        this.props.onSwitchTurn(game.turn);
        this.props.onAddScore(game.winner);
        this.props.onSetGameCompleted(game.completed);
        }
    }
    }

    handlePlayerNameInput = (text) => {
        this.props.onAddPlayerName(text);
    } 

    addPlayer = () => {
       let newPlayer = {
        id: this.props.players.length,
        name: this.props.newPlayer,
        wins: 0,
        loses: 0,
        score: 0,
        selected: '',
       }
       this.props.onAddPlayer(newPlayer); 
       console.log(this.props.players);
    }
   
  render() {

    let gameCompleted;

    if(this.props.gameCompleted) {
        gameCompleted = <div onClick={() => this.props.onResetGame()}>Game Completed! Reset the game?</div>
    }

    return (
            <React.Fragment>
            <Header />
            <div className="game-container">
            <Players className="player-container-x" symbol="X" />
            <div className="squares-wrap">
            <AddPlayer 
            newPlayerName={this.props.newPlayer.name}
            handlePlayerNameInput={this.handlePlayerNameInput}
            addPlayer={this.addPlayer}
            />
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
            {gameCompleted}
            </React.Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        gameCompleted: state.game.gameCompleted,
        squares: state.game.squares,
        playerTurn: state.game.playerTurn,
        players: state.game.players,
        selectedPlayerX: state.game.selectedPlayerX,
        selectedPlayer0: state.game.selectedPlayer0,
        newPlayer: state.game.newPlayer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetGameCompleted: (completed) => dispatch(setGameCompleted(completed)),
        onAddSymbol: (symbol) => dispatch(addSymbol(symbol)),
        onSwitchTurn: (playerTurn) => dispatch(switchTurn(playerTurn)),
        onAddScore: (score) => dispatch(addScore(score)),
        onResetGame: () => dispatch(resetGame()),
        onAddPlayerName: (name) => dispatch(addPlayerName(name)),
        onAddPlayer: (player) => dispatch(addPlayer(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

import React, { Component } from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import { setGameCompleted, addSymbol, switchTurn, 
    addScore, resetGame, addPlayerName, 
    addPlayer, playerSearch, addStorage } from '../../store/actions/game';
import Square from './Square/Square';
import './Game.scss';
import { gameFunction } from '../../game/gameFunction';
import Players from '../Players/Players';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';

class Game extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
            players: '',
        }
      }
      
    componentWillMount() {
        localStorage.getItem('players', 'selectedPlayerX', 'selectedPlayer0');
        let storage = JSON.parse(localStorage.getItem('players'));
        let selectedPlayerX = localStorage.getItem('selectedPlayerX');
        let selectedPlayer0 = localStorage.getItem('selectedPlayer0');
        if(storage !== null) {
        this.props.onAddStorage(storage, selectedPlayerX, selectedPlayer0 );
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('players', JSON.stringify(nextProps.players));
        localStorage.setItem('selectedPlayerX', nextProps.selectedPlayerX);
        localStorage.setItem('selectedPlayer0', nextProps.selectedPlayer0);
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
    }

    handlePlayerSearchInput = (text) => {
        this.props.onPlayerSearch(text);
    }
   
  render() {

    let gameCompleted;

    if(this.props.gameCompleted) {
        gameCompleted = <Button 
        title="Game Completed! Reset the game?"
        onClick={() => this.props.onResetGame()}/>
    }

    return (
            <React.Fragment>
            <Header />
            <div className="game-container">
            <div className="game-playerContainer">
            <Players  symbol="X" />
            </div>
            <div className="game-squaresWrap">
            <div className="squares-container">
            {this.props.squares.map(square => {
                            return <Square 
                                key={square.id}
                                symbol={square.symbol}
                                id={square.id}
                                handleClick={this.handleSquareClick}/>
                            })}
            </div>
            <div className="game-addPlayer">
            <Input 
            placeholder="Add new player"
            value={this.props.newPlayer}
            handleInput={this.handlePlayerNameInput}
            />
            </div>
            <Button 
            title="Add"
            onClick={() => this.addPlayer()} />
            <Input 
            placeholder="Search for player"
            value={this.props.playerSearch}
            handleInput={this.handlePlayerSearchInput}
            />
            </div>
            <div className="game-playerContainer">
            <Players symbol="0" />
            </div>
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
        playerSearch: state.game.playerSearch,
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
        onPlayerSearch: (search) => dispatch(playerSearch(search)),
        onAddStorage: (storage, playerX, player0) => dispatch(addStorage(storage, playerX, player0)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

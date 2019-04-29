import { SET_GAME_COMPLETED, ADD_SYMBOL, SWITCH_TURN, SELECT_PLAYER_X, 
    SELECT_PLAYER_0, ADD_SCORE, RESET_GAME, ADD_PLAYER_NAME, 
    ADD_PLAYER, PLAYER_SEARCH, ADD_STORAGE } from '../actions/actionTypes';
import initialSquareData from './initialSquareData';
import initialPlayerData from './initialPlayerData';

export const initialState = {
    gameCompleted: false,
    squares: initialSquareData,
    players: initialPlayerData,
    selectedPlayerX: '',
    selectedPlayer0: '',
    playerTurn: 'X',
    newPlayer: '',
    playerSearch: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_GAME_COMPLETED:
        return {
            ...state,
            gameCompleted: action.completed,
        };
    case RESET_GAME:
        return {
            ...state,
            gameCompleted: false,
            squares: initialSquareData,
            playerTurn: 'X',
        };
    case ADD_SYMBOL:
        return {
            ...state,
            squares: action.symbol,
        };
    case SWITCH_TURN:
        return {
            ...state,
            playerTurn: action.playerTurn,
        };
    case SELECT_PLAYER_X:
        return {
            ...state,
            players: action.player,
            selectedPlayerX: action.id,
            squares: initialSquareData,
        };
    case SELECT_PLAYER_0:
        return {
            ...state,
            players: action.player,
            selectedPlayer0: action.id,
            squares: initialSquareData,
        };
    case ADD_SCORE:
        return {
            ...state,
            players: action.score,
        };
    case ADD_PLAYER_NAME:
        return {
            ...state,
            newPlayer: action.name,
        };
    case ADD_PLAYER:
        return {
            ...state,
            players: state.players.concat(action.player),
        };
    case PLAYER_SEARCH:
        return {
            ...state,
            playerSearch: action.search,
        };
    case ADD_STORAGE:
        return {
            ...state,
            players: action.storage,
            selectedPlayerX: action.playerX,
            selectedPlayer0: action.player0,
        };
    default:
        return state;
    }
};

export default reducer;

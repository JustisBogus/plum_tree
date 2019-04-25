import { SET_GAME_COMPLETED, ADD_SYMBOL, SWITCH_TURN, SELECT_PLAYER_X, 
    SELECT_PLAYER_0, ADD_SCORE } from '../actions/actionTypes';
import initialSquareData from './initialSquareData';
import initialPlayerData from './initialPlayerData';

const initialState = {
    squares: initialSquareData,
    players: initialPlayerData,
    selectedPlayerX: '',
    selectedPlayer0: '',
    playerTurn: 'X',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_COMPLETED:
            return {
                ...state,
                gameCompleted: true,
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
            };
            case SELECT_PLAYER_0:
            return {
                ...state,
                players: action.player,
                selectedPlayer0: action.id,
            };
            case ADD_SCORE:
            return {
                ...state,
                players: action.score,
            };
        default:
            return state;
    }
};

export default reducer;

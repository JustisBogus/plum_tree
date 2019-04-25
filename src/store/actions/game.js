import { SET_GAME_COMPLETED, ADD_SYMBOL, SWITCH_TURN, SELECT_PLAYER_X, SELECT_PLAYER_0  } from './actionTypes';

export const setGameCompleted = () => {
    return {
        type: SET_GAME_COMPLETED
    };
};

export const addSymbol = (symbol) => {
    return {
        type: ADD_SYMBOL,
        symbol: symbol,
    };
};

export const switchTurn = (playerTurn) => {
    return {
        type: SWITCH_TURN,
        playerTurn: playerTurn,
    };
};

export const selectPlayerX = (player, id) => {
    return {
        type: SELECT_PLAYER_X,
        player: player,
        id: id,
    };
};

export const selectPlayer0 = (player, id) => {
    return {
        type: SELECT_PLAYER_0,
        player: player,
        id: id,
    };
};
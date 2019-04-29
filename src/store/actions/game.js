import { SET_GAME_COMPLETED, ADD_SYMBOL, SWITCH_TURN, SELECT_PLAYER_X, 
    SELECT_PLAYER_0, ADD_SCORE, RESET_GAME, ADD_PLAYER_NAME, ADD_PLAYER, 
    PLAYER_SEARCH, ADD_STORAGE } from './actionTypes';

export const setGameCompleted = (completed) => {
    return {
        type: SET_GAME_COMPLETED,
        completed,
    };
};

export const resetGame = () => {
    return {
        type: RESET_GAME,
    };
};

export const addSymbol = (symbol) => {
    return {
        type: ADD_SYMBOL,
        symbol,
    };
};

export const switchTurn = (playerTurn) => {
    return {
        type: SWITCH_TURN,
        playerTurn,
    };
};

export const selectPlayerX = (player, id) => {
    return {
        type: SELECT_PLAYER_X,
        player: player,
        id,
    };
};

export const selectPlayer0 = (player, id) => {
    return {
        type: SELECT_PLAYER_0,
        player: player,
        id,
    };
};

export const addScore = (score) => {
    return {
        type: ADD_SCORE,
        score,
    };
};

export const addPlayerName = (name) => {
    return {
        type: ADD_PLAYER_NAME,
        name,
    };
};

export const addPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player,
    };
};

export const playerSearch = (search) => {
    return {
        type: PLAYER_SEARCH,
        search,
    };
};

export const addStorage = (storage, playerX, player0) => {
    return {
        type: ADD_STORAGE,
        storage,
        playerX,
        player0,
    };
};
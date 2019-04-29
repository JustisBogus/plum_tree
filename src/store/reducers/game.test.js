import { SET_GAME_COMPLETED, ADD_SYMBOL, SWITCH_TURN, SELECT_PLAYER_X, 
    SELECT_PLAYER_0, ADD_SCORE, RESET_GAME, ADD_PLAYER_NAME, 
    ADD_PLAYER, PLAYER_SEARCH, ADD_STORAGE } from '../actions/actionTypes';
import reducer from './game'; 
import { initialState } from '../reducers/game';

describe('Game Reducer', () => {
    it('Should return default state', () => {
        const newState = reducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return new state if receiving type', () => {

        const symbol = 'X' ;
        const newState = reducer(undefined, {
            type: SWITCH_TURN,
            payload: symbol      
        });
        expect(newState.playerTurn).toEqual(symbol);

    });

});
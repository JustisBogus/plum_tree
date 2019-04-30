import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Game from './Game';
import checkPropTypes from 'check-prop-types';
import { initialState } from '../../store/reducers/game'

import { findByTestAtrribute } from '../../../utilities/index';

const mockStore = configureStore();
let store;

const setUp = () => {
    store = mockStore(initialState)
    const component = shallow(<Game store={store} />);
    return component;
}

describe('Game Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render game component', () => {
        const wrapper = findByTestAtrribute(component, 'game-component');
        expect(wrapper.length).toBe(1);
    });
});


/*
const defaultState = initialState;
const mockStore = configureStore();
let store,container;


const setUp = (initialState={}) => {
    store = mockStore(defaultState)
    const component = shallow(<Game store={store} />);
    return component;
}

describe('Game Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                gameCompleted: false,
                squares: [{
                    id: 0,
                    symbol: 'Test Symbol',
                }],
                playerTurn: 'Test player turn',
                players: [{
                    id: 1,
                    name: 'Test name',
                    wins: 0,
                    loses: 0,
                    score: 0,
                    selected: 'Test selected',
                }],
                selectedPlayerX: 'Test selected player X',
                selectedPlayer0: 'Test selected player 0',
                newPlayer: 'Test new player',
                playerSearch: 'Test player search',
            };
            const propsError = checkPropTypes(Game.propTypes, expectedProps, 'props', Game.name);
            expect(propsError).toBeUndefined();

        });

    });

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render game component', () => {
        const wrapper = findByTestAttribute(component, "game-component");
        expect(wrapper.length).toBe(1);
    });

});

*/
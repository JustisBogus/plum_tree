import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtrribute } from '../../utilities/index.js';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render header component', () => {
        const wrapper = findByTestAtrribute(component, 'header-component');
        expect(wrapper.length).toBe(1);
    });

    it('Should render two navLinks', () => {
        const wrapper = findByTestAtrribute(component, 'header-navLink');
        expect(wrapper.length).toBe(2);
    });

});

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Main extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
        }
      }
   
  render() {

    return (
        <header data-test="header-component">
        <div>
            <NavLink to="/" exact
            data-test="header-navLink" activeClassName="active">
            switch to game
            </NavLink>
        </div>
        <div>
            <NavLink to="/score" exact
            data-test="header-navLink" activeClassName="active">
            switch to score
            </NavLink>
        </div>
        </header>
    );
}
}

export default Main;
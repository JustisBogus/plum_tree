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
        <div>
        <div>
            Header
        </div>
        <div>
            <NavLink to="/" exact
            activeClassName="active">
            switch to game
            </NavLink>
        </div>
        <div>
            <NavLink to="/score" exact
            activeClassName="active">
            switch to score
            </NavLink>
        </div>
        </div>
    );
}
}

export default Main;
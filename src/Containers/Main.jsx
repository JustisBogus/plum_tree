import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Game from '../Components/TicTacToe/Game';
import Score from '../Components/TicTacToe/Score';

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
   
    render() {

        return (
            <React.Fragment>
                <Route path="/" exact component={Game} />  
                <Route path="/score" component={Score} />
            </React.Fragment>
        );
    }
}

export default Main;

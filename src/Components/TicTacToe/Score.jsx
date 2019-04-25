import React, { Component } from 'react';
import Header from '../../Components/Header';

class Score extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
        }
      }
   
  render() {

    return (
            <React.Fragment>
            <Header />
        <div>Score</div>
            </React.Fragment>
    );
}
}

export default Score;
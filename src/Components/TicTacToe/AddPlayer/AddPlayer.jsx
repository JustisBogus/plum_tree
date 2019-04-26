import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPlayer extends Component {
    constructor (props) {
        super(props);
        
        this.state = {    
        }
      }
   
  render() {

    return (
        <React.Fragment>
            <div>
         <input placeholder="Enter name to add a new player" onChange={(event) => this.props.handlePlayerNameInput(event.target.value)} name="addPlayer"
         value={this.props.newPlayerName}
          className="" id="" />
          </div>
          <div onClick={() => this.props.addPlayer()}>Add Player</div>
        </React.Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        players: state.game.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
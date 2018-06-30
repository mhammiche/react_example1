import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput'
import './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Eliott'
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput
          username={this.state.username}
          change={this.usernameChangeHandler}
        />
        <UserOutput
          user={this.state.username}
          question="What is the capital of France ?"
          answer="France"
        />
        <UserOutput
          user={this.state.username}
          question="Where is Nice ?"
          answer="In the south of France"
        />
      </div>
    );
  };
}

export default App;

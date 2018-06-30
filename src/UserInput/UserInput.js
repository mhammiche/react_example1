import React, { Component }  from 'react';
import './UserInput.css';

class UserInput extends Component {

  inputStyle = {
    fontSize: 'larger',
    border: '1px solid #ccc'
  };

  render() {
    return (
      <div className="UserInput">
        <label>Username</label>
        <input
          type="text"
          value={this.props.username}
          onChange={this.props.change}
          style={this.inputStyle} />
      </div>
    );
  };
};

export default UserInput;
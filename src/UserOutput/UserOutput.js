import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>From user : {props.user}</p>
      <p>{props.question}</p>
      <p>{props.answer}</p>
    </div>
  );
};

export default UserOutput;
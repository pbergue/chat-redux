import React from 'react';

const Message = (props) => {
  return (
    <li className="message">
      <h5>{props.message.author}<small>{props.message.created_at}</small></h5>
      <p>{props.message.content}</p>
    </li>
  );
};

export default Message;

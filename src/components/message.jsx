import React, { Component } from 'react';

import {emojify} from 'react-emojione';


class Message extends Component {
  constructor(props) {
    super(props);
  }
  stringToColour(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  render() {
    const style = {
      color: this.stringToColour(this.props.message.author)
    }
    return (
      <li className="message">
        <div className="d-flex">
          <h5 className="mr-3" style={style} >{this.props.message.author}</h5>
          <p>{this.props.message.created_at}</p>
        </div>
        <p>{emojify(this.props.message.content)}</p>
      </li>
    );
  }
};

export default Message;

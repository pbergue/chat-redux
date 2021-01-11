import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    setInterval(this.props.fetchMessages(this.props.selectedChannel), 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    return (
      <div className="message-list" ref={(list) => {this.list = list}} >
        <h2>{this.props.selectedChannel}</h2>
        <ul>
            {this.props.messages.map((message, index) => <Message key={index} message={message} />)}
        </ul>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMessages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

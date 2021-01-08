import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    setInterval(this.props.fetchMessages(this.props.selectedChannel), 5000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.props.fetchMessages(this.props.selectedChannel), 5000);
  // }

  render() {
    return (
      <div className="message-list">
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

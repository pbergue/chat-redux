import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitMessages } from '../actions';

class MessageForm extends Component {
  constructor(props){
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.submitMessages(this.props.selectedChannel, this.props.currentUser, this.state.value);
  };

  handleChange(event){
    this.setState({value: event.target.value});
  };

  render() {
    console.log(this.state.value);
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" type="submit" value="Submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitMessages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

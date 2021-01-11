import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  handleChannel = (event) => {
    this.props.changeChannel(event.target.innerText);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }
  render() {
    return (
      <ul className="channel-list">
        {
          this.props.channels.map((channel) => {
            const style = {
              color: this.stringToColour(channel)
            };
            return <li key={channel} onClick={this.handleChannel}><a className={this.props.selectedChannel === channel ? 'selected' : ''} style={style} ><h4>{channel}</h4></a></li>
          })
        }
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeChannel, fetchMessages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

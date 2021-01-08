// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

// internal modules
import App from './components/app';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedReducer from './reducers/selected_reducer';
import userReducer from './reducers/user_reducer';

import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'rennes'],
  selectedChannel: "general",
  currentUser: prompt("What's your username ?")
};


const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedReducer,
  currentUser: userReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, applyMiddleware(reduxPromise, logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

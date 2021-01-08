import {FETCH_MESSAGES, SUBMIT_MESSAGES} from '../actions';

export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case SUBMIT_MESSAGES:
      let newMessages = action.payload.messages.slice(0);
      newMessages.push(state);
      return newMessages;
    default:
      return state;
  }
}

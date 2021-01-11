import {FETCH_MESSAGES, SUBMIT_MESSAGES} from '../actions';

export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case SUBMIT_MESSAGES:
      // console.log(action.payload.content);
      // console.log(state);
      // const newMessages = state.slice(0);
      // newMessages.push(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}

import {CHANGE_CHANNEL} from '../actions';

export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case CHANGE_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}

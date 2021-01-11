// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SUBMIT_MESSAGES = 'SUBMIT_MESSAGES';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export function fetchMessages(channel) {
  const downCasedChannel = channel.toLowerCase();
  const promise = fetch(`https://wagon-chat.herokuapp.com/${downCasedChannel}/messages`)
  .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function submitMessages(channel, author, content) {
  const body = { author: author, content: content};
  const downCasedChannel = channel.toLowerCase();
  const promise = fetch(`https://wagon-chat.herokuapp.com/${downCasedChannel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: SUBMIT_MESSAGES,
    payload: promise
  };
}

export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    payload: channel
  };
}

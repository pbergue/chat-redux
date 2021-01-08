// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SUBMIT_MESSAGES = 'SUBMIT_MESSAGES';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
                  .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function submitMessages(channel, author, content) {
  const body = { author: author, content: content};
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
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

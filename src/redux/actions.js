
const {
  GET_POSTS,
  SET_CURRENT_DETAILS,
  SET_CURRENT_COMMENTS,
  GET_COMMENTS,
} = require('./type');

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    payload: posts,
  };
}

export function currentUserDetails(currentDetails) {
  return {
    type: SET_CURRENT_DETAILS,
    payload: currentDetails,
  };
}

export function commentsCurrentUser(currentId) {
  return {
    type: SET_CURRENT_COMMENTS,
    payload: currentId,
  };
}

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
}

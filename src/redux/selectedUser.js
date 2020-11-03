import { GET_POSTS, SET_CURRENT_COMMENTS, SET_CURRENT_DETAILS } from './type';

const initialState = {
  posts: [],
  currentDetails: [],
  postId: 0,
};

export const selectedUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case SET_CURRENT_DETAILS:
      return {
        ...state,
        currentDetails: action.payload,
      };

    case SET_CURRENT_COMMENTS:
      return {
        ...state,
        postId: action.payload,
      };
    default: return state;
  }
};

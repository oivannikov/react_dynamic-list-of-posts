import { GET_COMMENTS } from './type';

const initialState = {
  comments: [],
};

export const currentUserComment = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default: return state;
  }
};

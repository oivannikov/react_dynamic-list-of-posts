import { combineReducers } from 'redux';
import { currentUserComment } from './currentUserComments';
import { selectedUser } from './selectedUser';

export const rootReducer = combineReducers({
  posts: selectedUser,
  comments: currentUserComment,
});

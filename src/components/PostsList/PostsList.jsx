import React from 'react';

import './PostsList.scss';

import { useDispatch, useSelector } from 'react-redux';
import { commentsCurrentUser, currentUserDetails } from '../../redux/actions';

export const PostsList = ({
  viewPostUser,
}) => {
  const posts = useSelector(state => state.posts.posts);
  const postId = useSelector(state => state.posts.postId);
  const dispatch = useDispatch();

  function handleClick(id) {
    if (postId === id) {
      dispatch(commentsCurrentUser(0));
      dispatch(currentUserDetails([]));
    } else {
      dispatch(commentsCurrentUser(id));
      viewPostUser(id);
    }
  }

  return (
    <div className="PostsList">
      <h2>Posts:</h2>
      <ul className="PostsList__list">
      {
        posts.map(({ userId, title, id }) => {
          return (
            <li
              className="PostsList__item"
              key={id}
            >
              <div>
                <b>[User #{userId}]:</b>
                {title}
              </div>
              <button
                onClick={() => {
                  handleClick(id);
                }}
                type="button"
                className="PostsList__button button"
              >
                {id === postId ? "Close" : "Open"}
              </button>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
};

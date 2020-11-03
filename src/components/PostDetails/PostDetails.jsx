import React, { useState, useEffect } from 'react';

import { NewCommentForm } from '../NewCommentForm';
import { getPostComments, deleteComment } from '../../api/comments';

import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions';

import './PostDetails.scss';

export const PostDetails = () => {
  const currentDetails = useSelector(state => state.posts.currentDetails);
  const postId = useSelector(state => state.posts.postId);
  const comments = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();

  const { title, body, id } = currentDetails;
  const [hideComent, setHideComment] = useState(true);

  useEffect(() => {
    getPostComments(postId)
      .then(comments => dispatch(getComments(comments)));
  }, [comments]);

  function habdleButton() {
    setHideComment(() => !hideComent);
  }

  async function deleteComments(commentId) {
    await deleteComment(commentId);
  }

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>
      { id && (
        <>
          <section className="PostDetails__post">
            <h3>{title}</h3>
            <p>{body}</p>
          </section>

          <section className="PostDetails__comments">
            <button
              type="button"
              className="button"
              onClick={() => habdleButton()}
            >
              {
                `${!hideComent ? `Show` : `Hide`} ${comments.length} commnets`
              }
            </button>

            <ul className="PostDetails__list">
              {
                hideComent && comments.map(comment  => (
                  <li className="PostDetails__list-item">
                    <button
                      type="button"
                      className="PostDetails__remove-button button"
                      onClick={() => deleteComments(comment.id)}
                    >
                      X
                    </button>
                    <p>{ comment.name }</p>
                    <p>{ comment.body }</p>
                  </li>
                ))
              }
            </ul>
          </section>

          <section>
            <div className="PostDetails__form-wrapper">
              <NewCommentForm />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

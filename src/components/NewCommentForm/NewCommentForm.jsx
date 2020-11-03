import React, { useState } from 'react';
import './NewCommentForm.scss';
import { getPostComments, addComment } from '../../api/comments';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions';

export const NewCommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const postId = useSelector(state => state.posts.postId);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && body) {
      addComment(name, email, body, postId)
        .then(() => getPostComments(postId)
          .then((comments) => dispatch(getComments(comments))));

      setName('');
      setEmail('');
      setBody('');
    }
  };

  return (
    <form
      className="NewCommentForm"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="NewCommentForm__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="NewCommentForm__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type body here"
          className="NewCommentForm__input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a body
      </button>
    </form>
  )
};

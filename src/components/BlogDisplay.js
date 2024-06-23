import React, { useState } from 'react';

const BlogDisplay = ({ index, title, content, comments, addComment, deleteBlog }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    addComment(index, newComment);
    setNewComment('');
  };

  return (
    <div className="blog-display">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="comments-section">
        <h4>Comments</h4>
        {comments.map((comment, idx) => (
          <p key={idx}>{comment}</p>
        ))}
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <button onClick={deleteBlog}>Delete Blog</button>
    </div>
  );
};

export default BlogDisplay;

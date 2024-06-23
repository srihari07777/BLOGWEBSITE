import React, { useState } from 'react';

const BlogInput = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, content };
    addBlog(newBlog);
    setTitle('');
    setContent('');
  };

  return (
    <div className="input-container">
      <h2>Enter Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={handleContentChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogInput;

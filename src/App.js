// App.js

import React, { useState } from 'react';
import './App.css';
import BlogInput from './components/BlogInput';
import BlogDisplay from './components/BlogDisplay';
import Footer from './components/Footer'; // Import Footer component

function App() {
  const [blogs, setBlogs] = useState([]);

  // Function to add a new blog post
  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, comments: [] }]);
  };

  // Function to add a comment to a blog post
  const addComment = (index, comment) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].comments.push(comment);
    setBlogs(updatedBlogs);
  };

  // Function to delete a blog post
  const deleteBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO ORACLE - BLOGSPOT</h1>
      </header>
      <main className="App-main">
        <div className="container">
          <div className="block">
            <BlogInput addBlog={addBlog} />
            {blogs.map((blog, index) => (
              <BlogDisplay
                key={index}
                index={index}
                title={blog.title}
                content={blog.content}
                comments={blog.comments}
                addComment={addComment}
                deleteBlog={() => deleteBlog(index)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}

export default App;

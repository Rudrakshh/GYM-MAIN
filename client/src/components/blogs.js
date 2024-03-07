import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css';
import { useParams } from 'react-router-dom';

function Blog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch existing blog posts when the component mounts
    axios
      .get('http://localhost:3001/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        setError('Error fetching blog posts');
      });
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/profile/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          console.log('Received data from server:', data);
          setUser(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog post
    axios
      .post('http://localhost:3001/api/posts', { title, content, userId })
      .then((response) => {
        setPosts([...posts, response.data]);
        setTitle('');
        setContent('');
      })
      .catch((err) => {
        setError('Error creating a new blog post');
      });
  };

  const handleDelete = (postId, postUserId) => {
    if (userId === postUserId) {
      axios
        .delete(`http://localhost:3001/api/posts/${postId}`, {
          params: { userId }, // Send userId as a parameter
        })
        .then((response) => {
          if (response.status === 200) {
            const updatedPosts = posts.filter((post) => post._id !== postId);
            setPosts(updatedPosts);
          } else {
            setError('Failed to delete post');
          }
        })
        .catch((err) => {
          setError('Error deleting post');
        });
    } else {
      setError('You are not authorized to delete this post');
    }
  };

  
  
  
  
  
  

  return (
    <div className="blog-component">
      <h2>Create a Blog Post</h2>
      
      <form className="blog-form" onSubmit={handleSubmit}>
  <div>
    <label className="blog-label">Title:</label>
    <input
      className="blog-input"
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <div>
    <label className="blog-label">Content:</label>
    <textarea
      className="blog-input"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    ></textarea>
  </div>
  <div>
    <button className="blog-button" type="submit">
      Create Post
    </button>
  </div>
</form>


      {error && <p className="error-message">{error}</p>}

      <h2>Blog Posts</h2>
      <ul className='blogslist'>
      {posts.map((post) => (
  <li key={post._id} className='blog-post'>
    {user && (
      <>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
      </>
    )}
    <h3>Title: {post.title}</h3>
    <h3>DESCRIPTION:- {post.content}</h3>
    {/* ...other content */}
  </li>
))}

      </ul>
    </div>
  );
}

export default Blog;

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import { PostsContext } from './contexts/PostsContext';
import Posts from './components/Posts';
import Form from './components/Form';

const App = () => {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get('http://localhost:4000/api/posts')
    .then(res => {
      console.log(res.data)
      setPosts(res.data)
    })
    .catch(err => console.log(err.response))
  }

  const deletePosts = (id) => {
    axios.delete(`http://localhost:4000/posts/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <PostsContext.Provider state={{ posts, setPosts, getPosts }}>
      <div className="App">
        <h1>Welcome to Bobby's Blog</h1>
        {/* <Form posts={posts} setPosts={setPosts} /> */}
        <Posts posts={posts} setPosts={setPosts} deletePosts={deletePosts} />
      </div>
    </PostsContext.Provider>
  );
}

export default App;

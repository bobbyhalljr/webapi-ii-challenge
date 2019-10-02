import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import { PostsContext } from './contexts/PostsContext';

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/posts')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err.response))
  }, [])

  return (
    <PostsContext.Provider value={posts}>
      <div className="App">
        <h1>Hello from app.js</h1>
      </div>
    </PostsContext.Provider>
  );
}

export default App;

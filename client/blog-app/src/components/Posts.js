import React, { useContext } from 'react';

import { PostContext } from '../contexts/PostsContext';

import '../App.css';

// const posts = useContext(PostsContext);
// console.log(posts)

const Posts = ({ posts, setPosts }) => {
    console.log(posts)
    return (
        <div>
        {posts.map(post => {
             return (
            <>
                <div className='posts'>
                    <div className='post'>
                        <h1>{post.title}</h1>
                        <h3>{post.contents}</h3>
                    </div>
                    <div className='btn-container'>
                        <button className='btn btn-edit'>Edit</button>
                        <button className='btn btn-delete'>Delete</button>
                    </div>
                </div>
                <hr color='#333' height='1px' />
            </>
            )
        })}
        </div>
    )
}

export default Posts;
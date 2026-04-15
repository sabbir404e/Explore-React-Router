import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {

    const posts = useLoaderData();
    return (
        <div>
            <h2>This is Posts page here: {posts.length}</h2>
            <div>
               {
                 posts.map(post => <Post key={post.id} post={post}></Post>)
               }
            </div>
        </div>
    );
};

export default Posts;
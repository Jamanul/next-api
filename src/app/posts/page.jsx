import React from 'react';

const getPost = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const PostPages = async() => {
    const posts = await getPost()
    //console.log(posts)
    return (
        <div>
            <h2 className='text-6xl mb-6'>All post</h2>
            {
                posts.map(post=><div className='grid grid-cols-4 border-2 p-6 ' key={post.id}>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                </div>)
            }
        </div>
    );
};

export default PostPages;
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: {
        absolute : "Posts"
    },
    description: "all about meals post",
  };

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
           <div className="grid grid-cols-4">
           {
                posts.map(post=><div className=' border-2 p-6 ' key={post.id}>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                    <button className="btn bg-red-500 text-white"><Link href={`/posts/${post.id}`}>View details</Link></button>
                </div>)
            }
           </div>
        </div>
    );
};

export default PostPages;
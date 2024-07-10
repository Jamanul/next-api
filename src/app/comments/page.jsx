import React from 'react';
const getComments = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    return data
}
const page = async() => {
    const comments = await getComments()
    return (
        <div>
             {
                comments.map(comment=><div className=' border-2 p-6 ' key={comment.id}>
                    <h2>{comment.email}</h2>
                    <h2>{comment.body}</h2>
                   
                </div>)
            }
        </div>
    );
};

export default page;
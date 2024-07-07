import React from 'react';

const getSinglePost = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const DetailsPage = async({params}) => {
    const {title,body} =await getSinglePost(params.id)
    return (
        <div>
            <h2>Post detail of post no {params.id}</h2>
            <h2>title {title}</h2>
            <h2>body {body}</h2>
        </div>
    );
};

export default DetailsPage;
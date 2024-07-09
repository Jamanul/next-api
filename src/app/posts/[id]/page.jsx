import React from 'react';

const getSinglePost = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export const generateMetadata =async ({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        title: `${data.title}`,
        description : data.body,
        keywords : data.body.split(' ')
    }
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
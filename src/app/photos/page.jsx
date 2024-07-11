
import Image from 'next/image';
import React from 'react';
const getPhotos = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    return data
}
const page = async() => {
    const photos = await getPhotos()
    return (
        <div>
            {
                photos.map(photo=><Image key={photo.id} src={photo.url} height={400} width={400}/>)
            }
        </div>
    );
};

export default page;
export async function PATCH(request,{params}){
    const body = await request.json()
    const index = comments.findIndex((c)=>c.id===parseInt(params.id))
    comments[index]={
        id: index+1,
        text: body.text
    }
    console.log(params.id)
    return Response.json({
        message: 'data updated',
        comments
    })
}

export async function DELETE(request,{params}){
    const newComments = comments.filter(c=>c.id !==parseInt(params.id))
    return Response.json({
        message: `deleted`,
        newComments
    })
}

const comments = [
    {
        id: 1,
        text: 'comment 1',
    },
    {
        id: 2,
        text: 'comment 2',
    },
    {
        id: 3,
        text: 'comment 3',
    },
] 
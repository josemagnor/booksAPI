interface CreateBookProps{
    title:string
    author:string
    genre:string
}
interface GetBookProps{
    id:string
}

interface DeleteBookProps{
    id:string
}
interface UpdateBookProps{
    id:string
    title:string
    author:string
    genre:string
}

export {CreateBookProps,GetBookProps,DeleteBookProps, UpdateBookProps}
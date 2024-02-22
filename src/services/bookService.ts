import { CreateBookProps, GetBookProps } from "../interfaces/interfaces"
import prismaClient from "../prisma/prisma"

class CreateBookService{
    async handle({title, author, genre}:CreateBookProps){
        const book = await prismaClient.book.create({
            data:{title,
                author,
                genre,
            }
        })
        return book
    }
}
class GetAllBooksService{
    async handle(){
        const books = await prismaClient.book.findMany()
        return books
    }
}

class GetBookService{
    async handle({id}:GetBookProps){
       const book = await prismaClient.book.findUnique({
        where:{
            id:id
        }
       })
       return book
    }
}

class UpdateBookService{
    async handle(){
        return(console.log("upadate book service"))
    }
}

class DeleteBookService{
    async handle(){
        return(console.log("delete book service"))
    }
}

export {CreateBookService, DeleteBookService,UpdateBookService,GetBookService, GetAllBooksService}
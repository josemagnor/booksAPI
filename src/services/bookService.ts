import { CreateBookProps, DeleteBookProps, GetBookProps, UpdateBookProps } from "../interfaces/interfaces"
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
       const book = await prismaClient.book.findFirst({
        where:{
            id:id
        }
       })
       return book
    }
}

class UpdateBookService{
    async handle({id,title,author,genre}:UpdateBookProps){
        const book = await prismaClient.book.update({
         where:{
             id:id
         },
         data:{
             title,
             author,
             genre
         }
        })
        return book;
     }
}

class DeleteBookService{
    async handle({id}:DeleteBookProps){
       const findBook = await prismaClient.book.findFirst({
        where:{
            id:id
        }
       }) 
       const book = await prismaClient.book.delete({
        where:{
            id:findBook?.id
        }
       })
    }
}

export {CreateBookService, DeleteBookService,UpdateBookService,GetBookService, GetAllBooksService}
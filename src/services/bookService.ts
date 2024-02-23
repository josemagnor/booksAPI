import { error } from "console"
import { CreateBookProps, DeleteBookProps, GetBookProps, UpdateBookProps } from "../interfaces/interfaces"
import prismaClient from "../prisma/prisma"

class CreateBookService{
    async handle({title, author, genre}:CreateBookProps){
        if(!title || !author || !genre){
            throw new Error("Preencha os campos corretamente")
        }

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
        if(!id){
            throw new Error("Preencha os campos corretamente")
        }

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
        if(!id || !title || !author || !genre){
            throw new Error("Preencha os campos corretamente")
        }

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
        if(!id){
            throw new Error("Preencha os campos corretamente")
        }

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
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBookService, DeleteBookService, UpdateBookService, GetBookService, GetAllBooksService } from "../services/bookService";

class CreateBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const {title, author, genre} = request.body as {title:string, author:string, genre:string}
        console.log(title)
        const bookService = new CreateBookService()
        const book = await bookService.handle({title,author,genre})
        reply.send(book)
    }
}
class GetAllBooksController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new GetAllBooksService()
        const books = await bookService.handle()
        reply.send(books)
    }
}
class GetBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const {id} = request.query as {id:string}  
        const bookService = new GetBookService()
        const book = await bookService.handle({id})
        reply.send(book)
    }
}

class UpdateBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new UpdateBookService()
        const {id, title, author, genre} =request.body as {id:string, title:string, author:string, genre:string}
        const book = await bookService.handle({id, title, author, genre})
        reply.send(book)
    }
}

class DeleteBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const {id} = request.query as {id:string}
        const bookService = new DeleteBookService()
        const book = await bookService.handle({id})
        reply.send(book)
    }
}

export {CreateBookController,DeleteBookController, UpdateBookController, GetBookController, GetAllBooksController}
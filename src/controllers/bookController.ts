import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBookService, DeleteBookService, UpdateBookService, GetBookService } from "../services/bookService";

class CreateBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new CreateBookService()
        const book = await bookService.handle()
        reply.send(book)
    }
}
class GetBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new GetBookService()
        const book = await bookService.handle()
        reply.send(book)
    }
}

class UpdateBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new UpdateBookService()
        const book = await bookService.handle()
        reply.send(book)
    }
}

class DeleteBookController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const bookService = new DeleteBookService()
        const book = await bookService.handle()
        reply.send(book)
    }
}

export {CreateBookController,DeleteBookController, UpdateBookController, GetBookController}
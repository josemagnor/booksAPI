import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateBookController, DeleteBookController, UpdateBookController,  GetAllBooksController ,GetBookController } from "./controllers/bookController";

export async function routes(fastifyInstance:FastifyInstance, fastifyOptions:FastifyPluginOptions) {

    fastifyInstance.post("/api/book", async(request:FastifyRequest,reply:FastifyReply) => {
        return new CreateBookController().handle(request,reply)
    })

    fastifyInstance.get("/api/book", async(request:FastifyRequest,reply:FastifyReply) => {
        return new GetBookController().handle(request,reply)
    })

    fastifyInstance.put("/api/book", async(request:FastifyRequest,reply:FastifyReply) => {
        return new UpdateBookController().handle(request,reply)
    })

    fastifyInstance.get("/api/books", async(request:FastifyRequest,reply:FastifyReply) => {
        return new GetAllBooksController().handle(request,reply)
    })

    fastifyInstance.delete("/api/book", async(request:FastifyRequest,reply:FastifyReply) => {
        return new DeleteBookController().handle(request,reply)
    })
}
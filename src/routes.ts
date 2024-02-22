import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastifyInstance:FastifyInstance, fastifyOptions:FastifyPluginOptions) {

    fastifyInstance.post("/api/book", async(request:FastifyRequest,response:FastifyReply) => {
        return {hello:"api/create"}
    })
    
    fastifyInstance.get("/api/book", async(request:FastifyRequest,response:FastifyReply) => {
        return {hello:"api/get"}
    })

    fastifyInstance.put("/api/book", async(request:FastifyRequest,response:FastifyReply) => {
        return {hello:"api/update"}
    })

    fastifyInstance.delete("/api/book", async(request:FastifyRequest,response:FastifyReply) => {
        return {hello:"api/delete"}
    })

}
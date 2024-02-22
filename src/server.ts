import { fastify } from "fastify";
import { routes } from "./routes";
import {fastifyCors} from "@fastify/cors"

const app = fastify({logger:false})


const start = async () =>{
    await app.register (fastifyCors);
    await app.register(routes);
    try {
        await app.listen({port:3333})

    } catch (error) {
        process.exit(1)
    }
}

start();
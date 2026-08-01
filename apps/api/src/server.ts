import Fastify from "fastify";
import { analyzeUrlSchema } from "@youtube-download-videos/shared";

const app = Fastify({
    logger: true
});

app.get("/api/health", async () => {
    return {
        ok: true,
        message: "API funcionando!"
    };
});

app.post("/api/analyze", async (req, reply) => {
    const result = analyzeUrlSchema.safeParse(req.body);

    // fail 
    if (!result.success) {
        return reply.status(400).send({
            error: "Bad Request",
            message: "Corpo da requisição inválido.",
            details: result.error.issues
        });
    }

    const { url } = result.data;

    return {
        ok: true,
        url,
    };
});

const port = Number(process.env.PORT ?? 3333);

try {
    await app.listen({
        port,
        host: "127.0.0.1"
    });

    console.log(`API disponível em http://localhost:${port}`);
} catch (error) {
    app.log.error(error);
    process.exit(1);
}
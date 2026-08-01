import Fastify from "fastify";

const app = Fastify({
    logger: true
});

app.get("/api/health", async () => {
    return {
        ok: true,
        message: "API funcionando!"
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
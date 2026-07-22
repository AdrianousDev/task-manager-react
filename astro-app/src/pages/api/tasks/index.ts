import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    const tasks = [
        {
            id: "1",
            title: "Estudar Astro",
            description: "Ler as docs.",
            completed: false,
        },
    ];

    return Response.json(tasks);
};

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    return Response.json({ ping: "pong" });
};

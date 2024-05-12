import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const handler = async (req: Request) => {
    try {
        return await fetchRequestHandler({
            endpoint: "/api/trpc",
            req,
            router: appRouter,
            createContext: () => ({})
        });
    } catch (error) {
        console.error("Error in route handler:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export { handler as GET, handler as POST }

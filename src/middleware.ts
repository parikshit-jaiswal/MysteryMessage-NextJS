import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const url = request.nextUrl;

    if (token &&
        (
            url.pathname === ("/sign-in") ||
            url.pathname === ("/sign-up") ||
            url.pathname === ("/verify") ||
            url.pathname === ("/")
        )
    ) {
        // Add any logic here if needed
    }
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/",
        "/verify/:path*",
        "/sign-in",
        "/sign-up",
    ],
};


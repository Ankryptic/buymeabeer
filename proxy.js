import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

        const { pathname } = req.nextUrl;


        // Public Routes that anyone can access
        const publicRoutes = [
            "/login",
            "/signup",
        ];

        const userRouter = "/:username/:path*"

        // Check for the pathname is public or not
        const isPublic = publicRoutes.some((route) => {
            pathname.startsWith(route)
        });

        if (!token && !isPublic){
            console.log("redirectiong")
            return NextResponse.redirect(new URL("/login", req.url))
        }

    } catch (error) {
        console.error(error);
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/complete-your-page/:path*",
        "/profile/:path*",
    ]
}

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
            "/faq",
            "/reviews"
        ];

        // Check for the pathname is Public route or not 
        const isPublic = publicRoutes.some((route) => {
            pathname.startsWith(route)
        });


        // if not login and pathname is not public route
        if (!token && !isPublic){
            console.log("redirectiong")
            return NextResponse.redirect(new URL("/login", req.url))
        }

        // Checks if login and Profile is completed or not
        if(token && !token.profileCompleted && !pathname.startsWith("/complete-your-page")){
            console.log("redirecting to complete")
            return NextResponse.redirect(new URL("/complete-your-page", req.url))
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

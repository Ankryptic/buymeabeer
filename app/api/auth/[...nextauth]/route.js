import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import UserDb from "@/app/db/userDB"
import User from "@/models/User"

export const Handler = NextAuth({

  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],


  // Callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Connect Database
      await UserDb()

      // check if user is Exist in the database
      const existingUser = await User.findOne({ email: user.email })

      if(!existingUser){

        // this is used to send error query to the login page
        // return "/login?error=UserNotFound";

        // Create new user account
        await User.create({
          username: user.email.split("@")[0],
          email: user.email,
        })

        return true;
      }

      return true
    },

    async jwt({token}) {
      await UserDb()

      if(token.email){
        const existingUser = await User.findOne({ email: token.email, });

        token.profileCompleted = existingUser?.profileCompleted ?? false;
      }

      return token;
    },

    async session({ session, token }){
      session.user.profileCompleted = token.profileCompleted
      return session;
    }

  }

})

export { Handler as GET, Handler as POST };
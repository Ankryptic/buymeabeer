import NextAuth from "next-auth"

import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import ConnectDB from "@/app/db/ConnectDB"
import User from "@/models/User"

export const Handler = NextAuth({

  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "email", type: "eamil" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        await ConnectDB();

        const user = await User.findOne({ email: credentials.email.toLowerCase().trim()})

        if(!user){
          throw new Error("User not Found!")
        }
        if(!user.password){
          throw new Error("Password not found. Continue with Gamil, GitHub....")
        }
        if(!user.emailVerified){
          throw new Error("Plaese your Verify Email")
        }

        const valid = await bcrypt.compare(credentials.password, user.password)

        if(!valid){
          throw new Error("Invalid Email or Password")
        }

        return({
          id: user._id,
          username: user.username, 
          email: user.email,
          profileCompleted: user.profileCompleted
        })
        
      }
    }),
  ],


  // Callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Connect Database
      await ConnectDB()

      // check if user is Exist in the database
      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser) {

        // this is used to send error query to the login page
        // return "/login?error=UserNotFound";

        // Create new user account
        await User.create({
          username: user.email.split("@")[0].toLowerCase().replace(/[^a-zA-Z0-9]/g, ""),
          email: user.email,
        })

        return true;
      }

      return true
    },

    async jwt({ token, user }) {
      await ConnectDB()

      if (token.email) {
        const existingUser = await User.findOne({ email: token.email, });

        token.profileCompleted = existingUser?.profileCompleted ?? false;
      }

      return token;
    },

    async session({ session, token }) {
      await ConnectDB()

      const dbUser = await User.findOne({ email: session?.user.email })

      session.user.username = dbUser.username
      session.user.profileCompleted = token.profileCompleted
      return session;
    }

  },

  session: {
    strategy: "jwt"
  },

})

export { Handler as GET, Handler as POST };
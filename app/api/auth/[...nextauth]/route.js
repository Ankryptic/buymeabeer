import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import UserDb from "@/app/db/userDB"
import User from "@/models/User"

export const Handler = NextAuth({
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
      const UserData = await User.findOne({ email: user.email })

      if(!UserData){
        throw Error("User not found!")
      }

      // Store data to the database
      // const userData = User.create({
      //   username: user.email.split("@")[0],
      //   email: user.email,
      //   name: user.email.split("@")[0],
      //   about: { type: String },
      //   socialLink: { type: String },
      //   profile: { type: String },
      //   cover: { type: String },
      //   country: { type: String },
      //   createdAt: { type: Date, default: Date.now },
      //   updatedAt: { type: Date, default: Date.now },
      // })

      return true
    },
  }
})

export { Handler as GET, Handler as POST };
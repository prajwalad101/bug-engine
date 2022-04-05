import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import GitHubProvider from "next-auth/providers/github";

import VerifiedUser from "../../../models/VerifiedUser";
import dbConnect from "../../../utils/dbConnect";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user }) {
      // Fetch user from the email
      const userEmail = user?.email;

      await dbConnect();
      const dbUser = await VerifiedUser.findOne({ email: userEmail });
      // if user exists in database, authorize
      if (dbUser) {
        return true;
      } else {
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user && user.role) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.role = token.role;
      session.user.id = token.sub;
      return session;
    },
  },
});

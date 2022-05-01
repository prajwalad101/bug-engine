import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Demo user",
      async authorize(credentials) {
        return credentials;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user }) {
      if (user.demo === "true") {
        return true;
      }
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
      if (user && user.demo) {
        token.role = "demo";
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role === "demo") {
        session.user.name = "Demo user";
        session.user.email = "demouser@gmail.com";
      }
      session.user.role = token.role;
      session.user.id = token.sub;
      return session;
    },
  },
});

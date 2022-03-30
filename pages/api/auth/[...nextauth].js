import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import GitHubProvider from "next-auth/providers/github";

import User from "../../../models/User";
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
    async signIn({ logUser }) {
      // Fetch user from the email
      const userEmail = logUser?.email;

      await dbConnect();
      const user = await User.findOne({ email: userEmail });
      // if user exists in database, authorize
      if (user) {
        return true;
      } else {
        return false;
      }
    },
  },
});

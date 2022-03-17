import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import GitHubProvider from "next-auth/providers/github";

import Developer from "../../../models/Developer";
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Fetch developer from the email
      const userEmail = user?.email;

      await dbConnect();
      const developer = await Developer.findOne({ email: userEmail });
      // if developer exists in database, authorize that developer
      if (developer) {
        return true;
      } else {
        return false;
      }
    },
  },
});

import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import GitHubProvider from "next-auth/providers/github";

import Assignee from "../../../models/Assignee";
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
      // Fetch assignee from the email
      const userEmail = user?.email;

      await dbConnect();
      const assignee = await Assignee.findOne({ email: userEmail });
      // if assignee exists in database, authorize
      if (assignee) {
        return true;
      } else {
        return false;
      }
    },
  },
});

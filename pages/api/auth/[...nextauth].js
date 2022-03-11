import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import Developer from "../../../models/Developer";
import dbConnect from "../../../utils/dbConnect";

export default NextAuth({
  // Configure authentication providers
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     port: 465,
    //     host: "smtp.gmail.com",
    //     secure: true,
    //     auth: {
    //       user: process.env.EMAIL_USERNAME,
    //       pass: process.env.EMAIL_PASSWORD,
    //     },
    //     tls: {
    //       rejectUnauthorized: false,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  secret: "BqkdKnJAssR1BndJnUeY4OoIAUUFG6PeiK+S7GfIUhs=",
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

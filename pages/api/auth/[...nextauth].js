import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongoDb";

import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  // Configure authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});

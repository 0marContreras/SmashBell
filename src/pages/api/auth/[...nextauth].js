import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"


export default NextAuth({
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        TwitchProvider({
          clientId: process.env.TWITCH_CLIENT_ID,
          clientSecret: process.env.TWITCH_CLIENT_SECRET
        })
      ]
})



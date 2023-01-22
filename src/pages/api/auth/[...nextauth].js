import prisma from "@/libs/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "9876543210" },
        otp: { label: "OTP", type: "text", placeholder: "123456" },
      },
      async authorize(credentials) {
        console.log(credentials)
        const user = await prisma.user.findFirst({
          where: {
            phone: credentials.phone,
            otp: credentials.otp,
          },
        })
        console.log(user)
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  //   enable jwt
  session: {
    strategy: "jwt",
  },
  pages: {
    // signIn: "/",
    // error: "/error",
  },
})

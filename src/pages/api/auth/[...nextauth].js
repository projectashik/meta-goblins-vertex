import prisma from "@/libs/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
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
        if (user && user.otpExpiry && user.otpExpiry < new Date()) {
          return null
        }
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
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.phone = user.phone
        token.address = {
          lat: user.latitude,
          lng: user.longitude,
        }
      }
      return token
    },
    session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.role = token.role
        session.user.phone = token.phone
        session.user.wallet = token.wallet
        session.user.address = {
          lat: token.address.lat,
          lng: token.address.lng,
        }
      }
      return session
    },
  },
  pages: {
    signIn: "/",
    // error: "/error",
  },
}

export default NextAuth({
  ...authOptions,
  // send all the user data to the session
})

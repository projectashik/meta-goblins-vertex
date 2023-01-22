import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  const mylistings = await prisma.listings.findMany({
    where: {
      userId: session.user.id,
    },
  })

  return res.json({
    data: mylistings,
  })
}

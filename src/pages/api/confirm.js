import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const { listingId } = req.body
  const session = await unstable_getServerSession(req, res, authOptions)
  const confirmed = await prisma.confirmed.create({
    data: {
      listingId,
      userId: session.user.id,
    },
  })
  return res.json({
    data: confirmed,
  })
}

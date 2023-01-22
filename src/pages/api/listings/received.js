import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const { listingId } = req.body
  const session = await unstable_getServerSession(req, res, authOptions)
  const select = await prisma.confirmed.findFirst({
    where: {
      listingId,
      userId: session.user.id,
    },
  })
  const confirmed = await prisma.confirmed.update({
    where: {
      id: select.id,
    },
    data: {
      is_received: true,
      receivedAt: new Date(),
    },
  })

  return res.json({
    data: confirmed,
  })
}

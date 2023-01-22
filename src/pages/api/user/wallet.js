import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(403).json({
      message: "Unauthorized",
    })
  }

  const user = await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      wallet: req.body.wallet,
    },
  })

  return res.json({
    message: "Updated wallet address",
  })
}

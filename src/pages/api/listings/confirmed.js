import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { list } from "postcss"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const { id, role } = session.user
  const listings =
    role === "collector"
      ? await prisma.confirmed.findMany({
          where: {
            userId: id,
          },
          include: {
            listing: true,
            user: true,
          },
        })
      : await prisma.confirmed.findMany({
          include: {
            listing: true,
            user: true,
          },
        })

  return res.json(listings)
}

import prisma from "@/libs/prisma"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const { title, description, address, type } = req.body
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const { id } = session.user

  const listing = await prisma.listings.create({
    data: {
      title,
      description,
      latitude: address.lat.toString(),
      longitude: address.lng.toString(),
      type,
      userId: id,
    },
  })

  res.json(listing)
}

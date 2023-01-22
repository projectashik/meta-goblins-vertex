import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    return res.json(session.user.email)
  } else {
    res.status(401).json({ error: "Unauthorized" })
  }
}

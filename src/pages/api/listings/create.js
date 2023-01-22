export default async function handler(req, res) {
  const { title, description, address, type } = req.body
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const { id } = session.user

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      latitude: address.lat,
      longitude: address.lng,
      type,
      userId: id,
    },
  })

  res.json(listing)
}

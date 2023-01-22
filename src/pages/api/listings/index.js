import prisma from "@/libs/prisma"

export default async function handler(req, res) {
  const listings = await prisma.listings.findMany({
    include: {
      user: true,
    },
  })
  // return all the listings which are not confirmed in confirmedModel
  const confirmedListings = await prisma.confirmed.findMany({})
  listings.filter((listing) => {
    const listingId = listing.id
    const confirmedListing = confirmedListings.find((confirmedListing) => {
      return confirmedListing.listingId === listingId
    })
    if (confirmedListing) {
      return false
    }
    return true
  })
  return res.json({
    data: listings,
  })
}

import prisma from "@/libs/prisma"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { role, name, email, phone, otp, latitude, longitude } = req.body

    const sentOtp = await prisma.otp.findFirst({
      where: {
        for: phone,
      },
      orderBy: {
        id: "desc",
      },
    })
    console.log(sentOtp)
    if (sentOtp === null) {
      res.status(400).json({ message: "Something went wrong" })
      return
    }

    if (sentOtp.otp != otp) {
      console.log("User:", otp)
      console.log(sentOtp.otp === otp)
      res.status(400).json({ message: "Invalid OTP" })
      return
    }

    const user = await prisma.user.findFirst({
      where: {
        phone: phone,
      },
    })

    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        role: role,
        latitude: latitude,
        longitude: longitude,
      },
    })

    // do something with email and password
    res.status(200).json({ message: "Success" })
  }
}

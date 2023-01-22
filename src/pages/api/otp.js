import prisma from "@/libs/prisma"
import { sparrow } from "@/libs/sparrow"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, type = "register" } = req.body
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    if (type === "register") {
      await prisma.otp.create({
        data: {
          for: phone,
          otp: otp,
          otpExpiry: new Date(new Date().getTime() + 5 * 60000),
        },
      })
    } else {
      const user = await prisma.user.findFirst({
        where: {
          phone: phone,
        },
      })
      if (!user) {
        res.status(400).json({ message: "User not found" })
        return
      }
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          otp: otp,
          otpExpiry: new Date(new Date().getTime() + 5 * 60000),
        },
      })
    }
    const data = await sparrow.sendOtp(phone, otp)
    console.log(data)

    // Integrate Sparrow SMS API here
    res.status(200).json({ message: "OTP sent successfully" })
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

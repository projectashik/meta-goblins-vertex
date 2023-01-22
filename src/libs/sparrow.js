export const sparrow = {
  token: process.env.SPARROW_TOKEN,
  identity: process.env.SPARROW_IDENTITY,
  url: process.env.SPARROW_URL + "/sms",
  send: async function (to, message) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: this.token,
        from: this.identity,
        to: to,
        text: message,
      }),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!")
    }
    return data
  },
  sendOtp: async function (to, otp) {
    const message = `Your OTP for LeftOverLift is ${otp}. It is valid for 5 minutes.`
    return await this.send(to, message)
  },
}

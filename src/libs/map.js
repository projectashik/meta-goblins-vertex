const { default: axios } = require("axios")

export const map = {
  token: "d7112eef7e08fc2e54866400d07acfa4",
  fetch: async function (lat, lng) {
    const response = await axios.post(
      `https://us1.locationiq.com/v1/reverse?key=pk.f055f871cddefc0999769164075eae1b&lat=${lat}&lon=${lng}&format=json`
    )
    return response.data
  },
}

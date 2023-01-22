import { map } from "@/libs/map"
import { useEffect, useState } from "react"
import { Text } from "@mantine/core"

const Address = ({ lat, lng }) => {
  const [address, setAddress] = useState()
  useEffect(() => {
    const fetchLocation = async (lat, lng) => {
      const data = await map.fetch(lat, lng)
      setAddress(data.address.road)
    }
    fetchLocation(lat, lng)
    // setAddress(session.user.address)
  }, [lat, lng])
  return <Text>{address}</Text>
}
export default Address

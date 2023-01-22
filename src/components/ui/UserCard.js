import { map } from "@/libs/map"
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { HiPencilSquare } from "react-icons/hi2"

const UserCard = ({ setOpenedEdit }) => {
  const { data: session } = useSession()
  const [address, setAddress] = useState()
  useEffect(() => {
    const fetchLocation = async (lat, lng) => {
      const data = await map.fetch(lat, lng)
      setAddress(data.address.road)
    }
    if (session) {
      fetchLocation(session.user.address.lat, session.user.address.lng)
      // setAddress(session.user.address)
    }
  }, [session])
  return (
    <Paper p='md' withBorder className='space-y-3'>
      {session && (
        <>
          <Badge>{session.user.role}</Badge>
          <Title order={4}>{session && session.user.name}</Title>
          <Text>Email: {session && session.user.email}</Text>
          <Text>Phone: +977 {session && session.user.phone}</Text>
          <Text>Address: {address && address}</Text>
        </>
      )}
      {setOpenedEdit && (
        <Tooltip label='Edit Your Details'>
          <ActionIcon
            onClick={() => {
              setOpenedEdit(true)
            }}
          >
            <HiPencilSquare />
          </ActionIcon>
        </Tooltip>
      )}
    </Paper>
  )
}
export default UserCard

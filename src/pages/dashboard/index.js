import { EditUserForm } from "@/components/forms"
import DashboardLayout from "@/layouts/DashboardLayout"
import { map } from "@/libs/map"
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { HiPencilSquare } from "react-icons/hi2"

const Index = () => {
  const [openedEdit, setOpenedEdit] = useState(false)
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
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='md:col-span-3'>
          <Paper bg='white' p='lg' withBorder>
            <h1>Dashboard</h1>
            <div className='grid flex-1  grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3'>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>112</Title>
                <Text>Total Meals</Text>
              </Paper>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>112</Title>
                <Text>Total Meals</Text>
              </Paper>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>112</Title>
                <Text>Total Meals</Text>
              </Paper>
            </div>
          </Paper>
        </div>
        <div>
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
            <Tooltip label='Edit Your Details'>
              <ActionIcon
                onClick={() => {
                  setOpenedEdit(true)
                }}
              >
                <HiPencilSquare />
              </ActionIcon>
            </Tooltip>
          </Paper>
        </div>
      </div>

      <EditUserForm opened={openedEdit} setOpened={setOpenedEdit} />
    </DashboardLayout>
  )
}
export default Index

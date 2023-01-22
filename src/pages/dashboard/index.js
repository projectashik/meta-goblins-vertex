import { EditUserForm } from "@/components/forms"
import UserCard from "@/components/ui/UserCard"
import DashboardLayout from "@/layouts/DashboardLayout"
import { map } from "@/libs/map"
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { HiPencilSquare } from "react-icons/hi2"

const Index = () => {
  const [openedEdit, setOpenedEdit] = useState(false)

  return (
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='md:col-span-3'>
          <Paper bg='white' p='lg' withBorder>
            <h1>Dashboard</h1>
            <div className='grid flex-1  grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3'>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>4</Title>
                <Text>Total Meals</Text>
              </Paper>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>2</Title>
                <Text>Total Edible</Text>
              </Paper>
              <Paper bg='teal.2' p='md' withBorder>
                <Title>2</Title>
                <Text>Total Non Edible</Text>
              </Paper>
            </div>
          </Paper>
        </div>
        <div>
          <UserCard setOpenedEdit={setOpenedEdit} />
        </div>
      </div>

      <EditUserForm opened={openedEdit} setOpened={setOpenedEdit} />
    </DashboardLayout>
  )
}
export default Index

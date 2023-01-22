import { EditUserForm } from "@/components/forms"
import DashboardLayout from "@/layouts/DashboardLayout"
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core"
import { useState } from "react"
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
            <Badge>Distributor</Badge>
            <Title order={4}>MG Restuarant</Title>
            <Text>Email: meta@vertex.com.np</Text>
            <Text>Phone: +977 9876543210</Text>
            <Text>Address: Kathmandu, Nepal</Text>
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

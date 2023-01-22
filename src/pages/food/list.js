import { EditUserForm } from "@/components/forms"
import DashboardLayout from "@/layouts/DashboardLayout"
import { TbAt } from "react-icons/tb"
import {
  ActionIcon,
  Badge,
  Paper,
  Text,
  Title,
  Tooltip,
  Input,
  TextInput,
  Radio,
  Textarea,
  Button,
} from "@mantine/core"
import { useEffect, useState } from "react"
import { HiPencilSquare } from "react-icons/hi2"
import { useForm } from "@mantine/form"
import Map from "@/components/map"
import { useSession } from "next-auth/react"
import UserCard from "@/components/ui/UserCard"
import { toast } from "@/components/ui/Toast"
import axios from "axios"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"

const List = () => {
  const form = useForm({})
  const [location, setLocation] = useState(null)
  const { data: session } = useSession()

  const connectedAddress = useAddress()

  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    if (session) {
      setWallet(session.user.wallet)
    }
  }, [session])

  const handleSubmit = async (values) => {
    try {
      const data = await axios.post("/api/listings/create", {
        ...values,
        address: location,
      })

      toast.success("Listing created successfully")
    } catch (e) {
      toast.error("Something went wrong")
      console.log(e)
    }
  }

  useEffect(() => {
    async function addAddress() {
      if (session) {
        if (!wallet) {
          await axios.post("/api/user/wallet", {
            wallet: connectedAddress,
          })
        }
      }
    }

    addAddress()
  }, [connectedAddress, wallet])

  if (!connectedAddress) {
    return (
      <DashboardLayout>
        <div className='flex w-full items-center justify-center mt-10'>
          <div className='max-w-4xl'>
            <ConnectWallet />
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <form onSubmit={form.onSubmit(handleSubmit)} className='md:col-span-3'>
          <Paper p='lg' className='space-y-5'>
            <h1 className='pb-5'>Form</h1>
            <div className='space-y-5'>
              <TextInput
                icon={<TbAt />}
                label='LeftOver Title'
                placeholder='Enter LeftOver Title'
                variant='filled'
                size='md'
                {...form.getInputProps("title")}
                withAsterisk
                className='space-y-2'
              ></TextInput>
              <Textarea
                placeholder='LeftOver Description'
                withAsterisk
                {...form.getInputProps("description")}
                label='LeftOver Description'
                autosize
                minRows={4}
                variant='filled'
                className='space-y-2'
              ></Textarea>
              <Radio.Group
                name='leftOverType'
                label='LeftOver Type'
                {...form.getInputProps("type")}
                withAsterisk
              >
                <Radio value='edible' label='Edible' />
                <Radio value='non_edible' label='Non-edible' />
              </Radio.Group>
              <div className='space-y-5'>
                <Text>Choose the location on Map.</Text>
                <Paper h={500}>
                  <Map location={location} setLocation={setLocation} />
                </Paper>
              </div>
              <div className='w-full'>
                <Button type='submit' fullWidth color='dark'>
                  Register
                </Button>
              </div>
            </div>
          </Paper>
        </form>
        <div>
          <UserCard />
        </div>
      </div>
    </DashboardLayout>
  )
}
export default List

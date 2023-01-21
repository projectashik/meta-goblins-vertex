import {
  ActionIcon,
  Button,
  Modal,
  NumberInput,
  Paper,
  Tabs,
  TextInput,
  Tooltip,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconSend } from "../Icons"

const DistroAuth = ({ open, setOpen, view = "register" }) => {
  return (
    <Modal
      title='Authenticate as Distributor'
      opened={open}
      onClose={() => setOpen(false)}
    >
      <Paper shadow>
        <Tabs defaultValue={view}>
          <Tabs.List>
            <Tabs.Tab value='register'>Register</Tabs.Tab>
            <Tabs.Tab value='login'>Login</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='register' pt='xs'>
            <Register />
          </Tabs.Panel>

          <Tabs.Panel value='login' pt='xs'>
            <Login />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Modal>
  )
}

const Login = () => {
  return (
    <Paper className='space-y-3'>
      <TextInput
        label='Phone Number'
        placeholder='9876543210'
        rightSection={
          <Tooltip label='Send OTP'>
            <ActionIcon>
              <IconSend width='15px' height='15px' />
            </ActionIcon>
          </Tooltip>
        }
      />

      <NumberInput label='One Time Password (OTP)' />

      <Button size='md' color='dark'>
        Login
      </Button>
    </Paper>
  )
}

const Register = () => {
  const form = useForm({
    initialValues: {},
  })
  return (
    <Paper className='space-y-3'>
      <TextInput
        {...form.getInputProps("name")}
        label='Name'
        placeholder='Niyoj Oli'
      />

      <TextInput
        {...form.getInputProps("email")}
        label='Email'
        placeholder='niyoj@vertexhacks.tech'
      />

      <TextInput
        {...form.getInputProps("phone")}
        label='Phone Number'
        placeholder='9876543210'
        rightSection={
          <Tooltip label='Send OTP'>
            <ActionIcon>
              <IconSend width='15px' height='15px' />
            </ActionIcon>
          </Tooltip>
        }
      />

      <NumberInput
        {...form.getInputProps("otp")}
        label='One Time Password (OTP)'
      />

      <Button size='md' color='dark'>
        Register
      </Button>
    </Paper>
  )
}

export default DistroAuth

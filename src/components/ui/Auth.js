import {
  ActionIcon,
  Button,
  Modal,
  NumberInput,
  Paper,
  Radio,
  Tabs,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useState } from "react"
import { IconSend } from "../Icons"
import Map from "../map"

const Auth = ({ open, setOpen, view = "register" }) => {
  return (
    <Modal title='Authenticate' opened={open} onClose={() => setOpen(false)}>
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
    initialValues: { role: "individual" },
  })
  const [location, setLocation] = useState(null)

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <Paper
      component='form'
      onSubmit={form.onSubmit(handleSubmit)}
      className='space-y-3'
    >
      <Radio.Group {...form.getInputProps("role")} name='role' withAsterisk>
        <Radio value='individual' label='Individual' />
        <Radio value='restaurant' label='Restaurant' />
      </Radio.Group>

      <TextInput
        withAsterisk
        {...form.getInputProps("name")}
        label='Name'
        placeholder='Niyoj Oli'
      />

      <TextInput
        withAsterisk
        {...form.getInputProps("email")}
        label='Email'
        placeholder='niyoj@vertexhacks.tech'
      />

      <TextInput
        withAsterisk
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
      {form.values.role === "restaurant" && (
        <NumberInput {...form.getInputProps("pan")} label='Pan Number' />
      )}

      <NumberInput
        withAsterisk
        {...form.getInputProps("otp")}
        label='One Time Password (OTP)'
      />

      <div className='aspect-square'>
        <Text>Click map choose location</Text>
        <Map location={location} setLocation={setLocation} />
      </div>

      <Button size='md' color='dark'>
        Register
      </Button>
    </Paper>
  )
}

export default Auth

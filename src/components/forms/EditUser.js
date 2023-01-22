import {
  ActionIcon,
  Button,
  Modal,
  NumberInput,
  Paper,
  Radio,
  TextInput,
  Tooltip,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconSend } from "../Icons"

const EditUser = ({ opened, setOpened }) => {
  const onClose = () => setOpened(false)
  const form = useForm({})
  return (
    <Modal title='Edit your details' opened={opened} onClose={onClose}>
      <form>
        <Paper className='space-y-3'>
          <Radio.Group {...form.getInputProps("role")} name='role' withAsterisk>
            <Radio value='individual' label='Individual' />
            <Radio value='restaurant' label='Restaurant' />
          </Radio.Group>

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
          {form.values.role === "restaurant" && (
            <NumberInput {...form.getInputProps("pan")} label='Pan Number' />
          )}

          <NumberInput
            {...form.getInputProps("otp")}
            label='One Time Password (OTP)'
          />

          <Button size='md' color='dark'>
            Edit
          </Button>
        </Paper>
      </form>
    </Modal>
  )
}
export default EditUser

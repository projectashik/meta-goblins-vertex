import { Button, Group } from "@mantine/core"
import Link from "next/link"

const Contributor = () => {
  return (
    <div className='container space-y-6  py-16 rounded flex items-center justify-between flex-col bg-primary p'>
      <h1 className='text-3xl font-bold max-w-sm text-center'>
        Want to become a contributor?
      </h1>
      <Group>
        <Button component={Link} href='/distributers' color='dark' size='lg'>
          Join Here
        </Button>
        <Button variant='outline' size='lg' color='dark'>
          Know More
        </Button>
      </Group>
    </div>
  )
}
export default Contributor

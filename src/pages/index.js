import { Button, Group } from '@mantine/core'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header className="h-screen bg-primary">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className='text-3xl font-bold'>LeftOverLift</Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#about" className="text-gray-700 font-bold">About Us</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 font-bold">Services</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 font-bold">Contact</a>
            </li>
            <li>
              <Button color="dark" className='!text-primary'>
                Sign Up
              </Button>
            </li>
            </ul>
        </nav>
      </div>

      <div className="container">
      <div className="grid grid-cols-2 lg:my-16">
        <div className="space-y-6">
          <h1 className='text-6xl font-bold leading-[61px]'>
            Revolutionalizing the way we manage food waste.
          </h1>
          <p className="text-xl ">
          Everything you need to connect your apps or games to decentralized networks. Powerful tools that simplify web3 development.
          </p>

          <Group>
            <Button color="dark">Sign Up</Button>
            <Button variant='outline' color='dark'>Know More</Button>
          </Group>
        </div>
      </div>
      </div>
    </header>
    </>
  )
}

import { disImages } from "@/data/dis-images"
import { Button, Group } from "@mantine/core"
import Image from "next/image"
import { DistributerNavbar } from "../../layouts"

const Header = ({ setOpen }) => {
  return (
    <header className='min-h-screen bg-primary'>
      <DistributerNavbar setOpen={setOpen} />

      <div className='container'>
        <div className='grid grid-cols-2 items-center gap-9 lg:my-16'>
          <div className='space-y-6'>
            <h1 className='text-6xl font-bold leading-[61px]'>
              Join the Movement, Dine with Purpose
            </h1>
            <p className='text-xl '>
              Everything you need to connect your apps or games to decentralized
              networks. Powerful tools that simplify web3 development.
            </p>

            <Group>
              <Button onClick={() => setOpen(true)} color='dark' size='lg'>
                Sign Up as Distributor
              </Button>
              <Button variant='outline' size='lg' color='dark'>
                Know More
              </Button>
            </Group>
          </div>

          <div>
            <div className='grid grid-cols-2 grid-rows-2 mt-16  justify-items-center gap-2 '>
              {disImages.map((image, index) => (
                <Image
                  src={image}
                  key={index}
                  className='aspect-square first:translate-x-1/2 first:translate-y-1/2 [&:nth-child(2)]:z-10'
                  alt='LeftOverLift'
                  width={"500"}
                  height={"500"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

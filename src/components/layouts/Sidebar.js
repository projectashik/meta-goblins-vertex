import { IconFoodbank, IconNft } from "@/components/Icons"
import { SidebarLink } from "@/components/ui"
import { clsx, Stack, Text, Title } from "@mantine/core"
import { FiPercent } from "react-icons/fi"
import { GrHistory } from "react-icons/gr"
import { HiOutlineSquares2X2 } from "react-icons/hi2"

const Sidebar = ({ open }) => {
  return (
    <div
      className={clsx(
        "sidebar h-screen w-64 shadow translate-x-0 [&>div]:p-5",
        {
          "-translate-x-64": !open,
        }
      )}
    >
      <div className='border-b h-16'>
        <Title order={3}>LeftOverLift.</Title>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <div className='w-20 h-20 bg-primary rounded-full'></div>
          <Text fw='bold'>+977 9876543210</Text>
        </div>
        <Stack mt='sm' spacing='0'>
          <SidebarLink href='/dashboard' icon={HiOutlineSquares2X2}>
            Dashboard
          </SidebarLink>
          <SidebarLink href='/food/list' icon={IconFoodbank}>
            Submit Food
          </SidebarLink>
          <SidebarLink href='/offers' icon={FiPercent}>
            Offers
          </SidebarLink>
          <SidebarLink href='/history' icon={GrHistory}>
            History
          </SidebarLink>
          <SidebarLink href='/nfts' icon={IconNft}>
            NFTs
          </SidebarLink>
        </Stack>
      </div>
    </div>
  )
}
export default Sidebar

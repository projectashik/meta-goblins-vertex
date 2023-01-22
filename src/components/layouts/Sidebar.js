import { IconFoodbank, IconNft } from "@/components/Icons"
import { SidebarLink } from "@/components/ui"
import { useSidebar } from "@/hooks"
import { clsx, Stack, Text, Title } from "@mantine/core"
import { useEffect } from "react"
import { FiPercent } from "react-icons/fi"
import { GrHistory } from "react-icons/gr"
import { HiOutlineSquares2X2 } from "react-icons/hi2"

const sidebarItems = [
  {
    href: "/dashboard",
    icon: HiOutlineSquares2X2,
    children: "Dashboard",
  },
  {
    href: "/food/list",
    icon: IconFoodbank,
    children: "Submit Food",
  },
  {
    href: "/offers",
    icon: FiPercent,
    children: "Offers",
  },
  {
    href: "/history",
    icon: GrHistory,
    children: "History",
  },
  {
    href: "/nfts",
    icon: IconNft,
    children: "NFTs",
  },
]

const Sidebar = () => {
  const { isOpen } = useSidebar()

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])
  return (
    <div
      className={clsx(
        "sidebar h-screen transition-transform shadow [&>div]:p-5",
        {
          "-translate-x-64 w-0": !isOpen,
          "translate-x-0 w-64": isOpen,
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
          {sidebarItems.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}
        </Stack>
      </div>
    </div>
  )
}
export default Sidebar

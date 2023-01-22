import Sidebar from "@/components/layouts/Sidebar"
import { useSidebar } from "@/hooks"
import { ActionIcon } from "@mantine/core"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

const DashboardLayout = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar()
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 transition-all bg-[#fefbf5]'>
        <header className='h-16 bg-white border-b border-l px-3 flex items-center'>
          <ActionIcon size='lg' onClick={toggleSidebar}>
            <HiOutlineMenuAlt2 className='text-xl' />
          </ActionIcon>
        </header>

        <div className='p-3'>{children}</div>
      </main>
    </div>
  )
}
export default DashboardLayout

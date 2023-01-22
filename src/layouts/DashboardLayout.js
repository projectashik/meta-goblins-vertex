import Sidebar from "@/components/layouts/Sidebar"
import SidebarProvider from "@/context/SidebarProvider"
import { useSidebar } from "@/hooks"
import { ActionIcon } from "@mantine/core"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

const DashboardLayout = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar()
  return (
    <SidebarProvider>
      <div className='flex'>
        <Sidebar open={isOpen} />
        <main className='flex-1'>
          <header className='h-16 bg-white border-b border-l flex items-center'>
            <ActionIcon onClick={toggleSidebar}>
              <HiOutlineMenuAlt2 />
            </ActionIcon>
          </header>

          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
export default DashboardLayout

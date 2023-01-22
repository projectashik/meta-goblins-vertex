import Sidebar from "@/components/layouts/Sidebar"
import { toast } from "@/components/ui/Toast"
import { useSidebar } from "@/hooks"
import { ActionIcon } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

const DashboardLayout = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar()

  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/")
      toast.error("You must be logged in to access this page")
    }
  }, [status])

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

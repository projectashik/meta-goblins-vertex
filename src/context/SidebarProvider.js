import { createContext, useState } from "react"

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
})

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => setIsOpen(!isOpen)
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider

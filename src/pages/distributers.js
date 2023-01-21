import {
  AllDistributors,
  Header,
  Perks,
} from "@/components/sections/Distributor"
import { FaqSection } from "@/components/sections/Index"
import DistroAuth from "@/components/ui/DistroAuth"
import { useState } from "react"

const Distributers = () => {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState("register")
  return (
    <>
      <Header setOpen={setOpen} />
      <Perks />
      <AllDistributors />
      <FaqSection />
      <DistroAuth open={open} setOpen={setOpen} view={view} />
    </>
  )
}
export default Distributers

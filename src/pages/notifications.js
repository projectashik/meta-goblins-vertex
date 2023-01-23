import DashboardLayout from "@/layouts/DashboardLayout"
import { Pagination } from "@mantine/core"
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core"
import { useEffect, useState } from "react"
import { TiTick } from "react-icons/ti"
import { ImCross } from "react-icons/im"
import axios from "axios"
import { SessionContext, useSession } from "next-auth/react"
import Link from "next/link"
import { toast } from "@/components/ui/Toast"
import { useContract, useMintToken } from "@thirdweb-dev/react"

const dummyData = [
  {
    id: 1,
    desc: "Listing #17 listed successfully.",
    // status: "Pending",
  },
  {
    id: 2,
    desc: "Listing #17 listed successfully.",
  },
  {
    id: 3,
    desc: "Listing #17 listed successfully.",
  },
]

const Notifications = () => {
  const [activePage, setActivePage] = useState(1)
  const [confirmedData, setConfirmedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/listings/confirmed")
      setConfirmedData(response.data)
    }
    fetchData()
  }, [confirmedData])

  const { data: session } = useSession()

  const { contract } = useContract(
    "0x5BB5Cd9c04Fe12E67d1178b079238DFCed655940",
    "FLT"
  )
  //   const { mutate: mintTokens, isLoading, error } = useMintToken(contract)

  //   console.log(error)
  //   console.log(isLoading)

  const received = async (id, to) => {
    try {
      const data = await axios.post("/api/listings/received", {
        listingId: id,
      })
      toast.success("Listing received successfully")
      //   mintTokens({
      //     to: to,
      //     amount: 1000,
      //   })
      const toAddress = to // Address of the wallet you want to mint the tokens to
      const amount = "1000"
      await contract.mintTo(toAddress, amount)
    } catch (e) {
      toast.error("Something went wrong")
      console.log(e)
    }
  }

  return (
    <DashboardLayout>
      <Paper p='lg' className='space-y-8'>
        <h1>Notifications</h1>
        <div className='space-y-4'>
          {confirmedData.map((singleData) => {
            if (singleData.is_received) {
              return null
            }
            return (
              <div
                key={singleData.id}
                className='bg-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-between space-y-5'
              >
                <div>
                  <p>
                    {session.user.role === "collector" ? (
                      <span className='text-green-500 font-semibold'>
                        Your request for listing #{singleData.id} has been sent
                        to the owner.
                      </span>
                    ) : (
                      <span className='text-green-500 font-semibold'>
                        Listing #{singleData.id} has been requested by{" "}
                        {singleData.user.name}.
                      </span>
                    )}
                  </p>
                </div>

                {/* Icons */}
                {!singleData.is_received && (
                  <div className='flex items-center md:justify-between space-x-2'>
                    <Tooltip
                      label={
                        session.user.role === "collector"
                          ? "Received leftovers."
                          : "Sent leftovers."
                      }
                    >
                      <button
                        onClick={() =>
                          received(singleData.id, singleData.user.wallet)
                        }
                        className='hover:bg-gray-200 border-2 text-green-900 border-green-300 text-3xl p-1.5 rounded-full flex items-center justify-center cursor-pointer'
                      >
                        <TiTick />
                      </button>
                    </Tooltip>
                    <Tooltip
                      label={
                        session.user.role === "collector"
                          ? "Remove Request"
                          : "Don't accept request"
                      }
                    >
                      <button className='hover:bg-gray-200 border-2 text-red-900 border-red-300 text-xl p-2.5 rounded-full flex items-center justify-center cursor-pointer'>
                        <ImCross />
                      </button>
                    </Tooltip>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <Pagination
          total={2}
          position={"center"}
          page={activePage}
          onChange={setActivePage}
          color='yellow'
        ></Pagination>
      </Paper>
    </DashboardLayout>
  )
}
export default Notifications

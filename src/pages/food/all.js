import DashboardLayout from "@/layouts/DashboardLayout"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import {
  Button,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core"
import Address from "@/components/ui/Address"

const All = () => {
  const [location, setLocation] = useState(null)
  const { data: session } = useSession()
  const [listings, setListings] = useState()
  const [edibleListings, setEdibleListings] = useState([])
  const [nonEdibleListings, setNonEdibleListins] = useState([])

  const connectedAddress = useAddress()

  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/listings")
      data &&
        data.data.data.map((item) => {
          if (item.type === "edible") {
            setEdibleListings((prev) => [...prev, item])
          } else {
            setNonEdibleListins((prev) => [...prev, item])
          }
        })
    }

    fetchData()
  }, [listings])

  useEffect(() => {
    if (session) {
      setWallet(session.user.wallet)
    }
  }, [session])
  useEffect(() => {
    async function addAddress() {
      if (session) {
        if (!wallet) {
          await axios.post("/api/user/wallet", {
            wallet: connectedAddress,
          })
        }
      }
    }

    addAddress()
  }, [connectedAddress, wallet])

  if (!connectedAddress) {
    return (
      <DashboardLayout>
        <div className='flex w-full items-center justify-center mt-10'>
          <div className='max-w-4xl'>
            <ConnectWallet />
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <Paper>
        <Tabs defaultValue='edible'>
          <Tabs.List>
            <Tabs.Tab value='edible'>Edible Leftovers</Tabs.Tab>
            <Tabs.Tab value='non_edible'>Non Edible Leftovers</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='edible' pt='xs'>
            <Paper p='md'>
              <Title>LeftOver Listings</Title>

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
                {edibleListings.map((item) => (
                  <Paper bg='yellow.1' p='md' withBorder className='space-y-3'>
                    <Title order={4}>{item.title}</Title>
                    <Text>{item.description}</Text>

                    <Flex>
                      <Stack>
                        <Text>Posted By: {item.user.name}</Text>
                        <Text>
                          Address:{" "}
                          <Address lat={item.latitude} lng={item.longitude} />
                        </Text>
                      </Stack>
                    </Flex>

                    <Button color='blue' variant='outline'>
                      Intrested In
                    </Button>
                  </Paper>
                ))}
              </div>
            </Paper>
          </Tabs.Panel>

          <Tabs.Panel value='non_edible' pt='xs'>
            <Paper p='md'>
              <Title>UnEdible LeftOver Listings</Title>

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
                {nonEdibleListings.map((item) => (
                  <Paper bg='yellow.1' p='md' withBorder className='space-y-3'>
                    <Title order={4}>{item.title}</Title>
                    <Text>{item.description}</Text>

                    <Flex>
                      <Stack>
                        <Text>Posted By: {item.user.name}</Text>
                        <Text>
                          Address:{" "}
                          <Address lat={item.latitude} lng={item.longitude} />
                        </Text>
                      </Stack>
                    </Flex>

                    <Button color='blue' variant='outline'>
                      Intrested In
                    </Button>
                  </Paper>
                ))}
              </div>
            </Paper>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </DashboardLayout>
  )
}
export default All

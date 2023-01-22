import { clsx, Group, Text, UnstyledButton } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"

const SidebarLink = ({ href, icon, children }) => {
  const Icon = icon
  const router = useRouter()

  return (
    <UnstyledButton
      component={Link}
      href={href}
      className={clsx(`hover:bg-yellow-200 w-full`, {
        "!bg-primary": router.pathname === href,
      })}
      p='sm'
      sx={{
        borderRadius: "0.5rem",
      }}
    >
      <Group>
        <Icon width='20' className='text-xl font-bold' height='20' />
        <Text fw={"bold"}>{children}</Text>
      </Group>
    </UnstyledButton>
  )
}
export default SidebarLink

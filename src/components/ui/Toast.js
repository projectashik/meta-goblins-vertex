import { showNotification } from "@mantine/notifications"
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi"

export const toast = {
  success: (message) => {
    showNotification({
      title: "Success",
      message: message,
      color: "green",
      icon: <HiOutlineCheck />,
    })
  },
  error: (message) => {
    showNotification({
      title: "Error",
      message: message,
      color: "red",
      icon: <HiOutlineX />,
    })
  },
}

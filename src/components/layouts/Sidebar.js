import { IconFoodbank, IconNft } from "@/components/Icons";
import { SidebarLink } from "@/components/ui";
import { useSidebar } from "@/hooks";
import { Button, clsx, Stack, Text, Title } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { FiPercent } from "react-icons/fi";
import { GrHistory } from "react-icons/gr";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  const sidebarItems = [
    {
      href: "/dashboard",
      icon: HiOutlineSquares2X2,
      children: "Dashboard",
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
    {
      href: "/notifications",
      icon: HiOutlineBell,
      children: "Notifications",
    },
  ];

  const { data: session } = useSession();

  const menuData = useMemo(() => {
    if (session && session.user && session.user.role) {
      const role = session.user.role;
      if (role === "individual" || role === "vendor") {
        sidebarItems.push({
          href: "/food/list",
          icon: IconFoodbank,
          children: "Submit Food",
        });
      } else if (role === "collector") {
        sidebarItems.push({
          href: "/food/all",
          icon: IconFoodbank,
          children: "View Food Listings",
        });
      }
    }

    return [...sidebarItems];
  }, [session]);

  useEffect(() => {}, [isOpen]);

  const router = useRouter();
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
      <div className="border-b h-16">
        <Title order={3}>LeftOverLift.</Title>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-primary rounded-full"></div>
          <Text fw="bold">+977 9876543210</Text>
        </div>
        <Stack mt="sm" spacing="0">
          {menuData.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}

          <Button
            mt="sm"
            onClick={() => {
              signOut();
              router.push("/");
            }}
            className="!bg-primary !text-black"
          >
            Logout
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default Sidebar;

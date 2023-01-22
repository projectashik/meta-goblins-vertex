import { Button, Menu, Text } from "@mantine/core";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ActionIcon } from "@mantine/core";
import { useState } from "react";

const Navbar = ({ setOpen }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => setNavOpen(!isNavOpen);
  console.log(isNavOpen);
  return (
    <div className="container  py-4  flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        LeftOverLift
      </Link>
      <nav>
        <ul className="flex items-center gap-4 hidden md:flex ">
          <li>
            <a href="#about" className="text-gray-700 font-bold">
              About Us
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 font-bold">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 font-bold">
              Contact
            </a>
          </li>
          <li>
            <Button
              onClick={() => setOpen(true)}
              color="dark"
              className="!text-primary"
            >
              Sign Up As Contributor
            </Button>
          </li>
        </ul>
        <div className="px-5">
          {" "}
          <Menu shadow="md" width={"100%"} className="md:hidden">
            <Menu.Target>
              <ActionIcon onClick={toggleNavbar}>
                <div className="md:hidden">
                  <HiOutlineMenuAlt2 />
                </div>
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown className={isNavOpen ? "flex" : "hidden"}>
              <Menu.Label>
                <a href="#about" className="text-gray-700 font-bold">
                  About Us
                </a>
              </Menu.Label>
              <Menu.Label>
                <a href="#about" className="text-gray-700 font-bold">
                  Services
                </a>
              </Menu.Label>
              <Menu.Label>
                <a href="#about" className="text-gray-700 font-bold">
                  Contact
                </a>
              </Menu.Label>
              <Menu.Label>
                <Button
                  onClick={() => {
                    toggleNavbar();
                    setOpen(true);
                  }}
                  color="dark"
                  className="!text-primary"
                >
                  Sign Up
                </Button>
              </Menu.Label>
            </Menu.Dropdown>
          </Menu>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

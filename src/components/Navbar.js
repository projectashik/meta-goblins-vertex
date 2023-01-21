import { Button } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return <div className="container h-16 flex items-center justify-between">
  <Link href="/" className='text-3xl font-bold'>LeftOverLift</Link>
  <nav>
    <ul className="flex items-center gap-4">
      <li>
        <a href="#about" className="text-gray-700 font-bold">About Us</a>
      </li>
      <li>
        <a href="#about" className="text-gray-700 font-bold">Services</a>
      </li>
      <li>
        <a href="#about" className="text-gray-700 font-bold">Contact</a>
      </li>
      <li>
        <Button color="dark" className='!text-primary'>
          Sign Up
        </Button>
      </li>
      </ul>
  </nav>
</div>;
};
export default Navbar;
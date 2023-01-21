import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { Navbar } from "../layouts";

const Header = () => {
  return  <header className="min-h-screen bg-primary">
  <Navbar/>

    <div className="container">
    <div className="grid grid-cols-2 items-center gap-9 lg:my-16">
      <div className="space-y-6">
        <h1 className='text-6xl font-bold leading-[61px]'>
          Revolutionalizing the way we manage food waste.
        </h1>
        <p className="text-xl ">
        Everything you need to connect your apps or games to decentralized networks. Powerful tools that simplify web3 development.
        </p>

        <Group>
          <Button color="dark" size="lg">Sign Up</Button>
          <Button variant='outline' size="lg" color='dark'>Know More</Button>
        </Group>
      </div>



      <div className="grid grid-cols-2 justify-items-center gap-2 ">
        {landingImages.map((image, index) => (
          <Image src={image} key={index} className="aspect-square" alt="LeftOverLift" width={"500"} height={"500"} />
        ))}
      </div>
    </div>
    </div>
  </header>;
};
export default Header;
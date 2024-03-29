import { landingImages } from "@/data/landing-images";
import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { Navbar } from "../../layouts";

const Header = ({ setOpen }) => {
  return (
    <header className="min-h-screen bg-primary">
      <Navbar setOpen={setOpen} />

      <div className="py-8 container ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-9 lg:my-16">
          <div className="md:space-y-6 space-y-2 order-last md:order-first">
            <h1 className="md:text-6xl font-bold md:leading-[61px]">
              Revolutionalizing the way we manage food waste.
            </h1>
            <p className="text-xl ">
              Everything you need to connect your apps or games to decentralized
              networks. Powerful tools that simplify web3 development.
            </p>

            <Group>
              <Button onClick={() => setOpen(true)} color="dark" size="lg">
                Sign Up
              </Button>
              <Button variant="outline" size="lg" color="dark">
                Know More
              </Button>
            </Group>
          </div>

          <div className="grid grid-cols-2 mb-8 md:mb-0 justify-items-center gap-2 ">
            {landingImages.map((image, index) => (
              <Image
                src={image}
                key={index}
                className="aspect-square"
                alt="LeftOverLift"
                width={"500"}
                height={"500"}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

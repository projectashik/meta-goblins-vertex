import { Button, Paper, Text } from "@mantine/core";
import Image from "next/image";

const About = ({ setOpen }) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">About Us.</h2>

        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Image
            src="/assets/about.png"
            className="rounded"
            alt="LeftOverLift"
            width={"400"}
            height={"400"}
          />
          <Paper className="lg:col-span-2 space-y-3 h-full border text-lg !flex p-8 flex-col justify-center">
            <Text>
              Everything you need to connect your apps or games to decentralized
              networks. Powerful tools that simplify web3 development.Everything
              you need to connect your apps or games to decentralized networks.
              Powerful tools that simplify web3 development.
            </Text>
            <div>
              <Button color="dark" size="md" onClick={() => setOpen(true)}>
                Sign Up
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
};
export default About;

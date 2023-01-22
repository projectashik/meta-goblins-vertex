import { distributers } from "@/data/distrubutors";
import { Paper, Title } from "@mantine/core";
import Image from "next/image";

const AllDistributors = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">All Contributor.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {distributers.map((data, index) => (
            <Distributer {...data} key={`distributor-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Distributer = ({ image, name }) => {
  return (
    <Paper>
      <Image src={image} alt={name} width={500} height={500} />
      <Title order={4} mt="sm">
        {name}
      </Title>
    </Paper>
  );
};

export default AllDistributors;

import { useState } from "react";
import { EditUserForm } from "@/components/forms";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core";
import { HiPencilSquare } from "react-icons/hi2";
import { Pagination } from "@mantine/core";

const dummyData = [
  {
    id: 1,
    title: "Himalayan Restaurant",
    offPercent: "25% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 50,
  },
  {
    id: 2,
    title: "ABC Restaurant",
    offPercent: "22% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 55,
  },
  {
    id: 3,
    title: "XYZ Restaurant",
    offPercent: "15% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 25,
  },
  {
    id: 4,
    title: "MNO Restaurant",
    offPercent: "25% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 30,
  },
  {
    id: 5,
    title: "Himalayan Restaurant",
    offPercent: "25% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 50,
  },
  {
    id: 6,
    title: "Himalayan Restaurant",
    offPercent: "25% off",
    desc: "We provide a organized system of food management for the eradication of hunger by incentivising donor individuals and volunteers.",
    address: "Thapathali, KTM",
    postedOn: "May 12, 2021",
    tokenEq: 50,
  },
];

const Offers = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <DashboardLayout>
      <Paper p="lg" className="space-y-8">
        <h1>Browse Offers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {dummyData.map((singleData) => {
            return (
              <div
                key={singleData.id}
                className="bg-gray-100 rounded-md space-y-8 pb-6"
              >
                {/* Top Section */}
                <div className="flex items-center justify-between">
                  <h2 className="px-5 font-bold text-xl">{singleData.title}</h2>
                  <p className="bg-primary font-bold text-xl md:text-2xl px-2 py-2 rounded-tr-md break-all">
                    {singleData.offPercent}
                  </p>
                </div>

                {/* Middle Section */}
                <div className="space-y-5">
                  <p className="px-5">
                    We provide a organized system of food management for the
                    eradication of hunger by incentivising donor individuals and
                    volunteers.
                  </p>

                  <div className="px-5 flex items-center justify-between">
                    <p>{singleData.address}</p>
                    <p>{singleData.postedOn}</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center">
                  <button className="border-b-4 py-2 font-bold border-primary">
                    Get for {singleData.tokenEq} Token
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementing Pagination */}
        <Pagination
          total={2}
          position={"center"}
          page={activePage}
          onChange={setActivePage}
          color="yellow"
        ></Pagination>
      </Paper>
    </DashboardLayout>
  );
};
export default Offers;

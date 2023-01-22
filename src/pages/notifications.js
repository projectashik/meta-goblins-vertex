import DashboardLayout from "@/layouts/DashboardLayout";
import { Pagination } from "@mantine/core";
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const dummyData = [
  {
    id: 1,
    desc: "Listing #17 listed successfully.",
    // status: "Pending",
  },
  {
    id: 2,
    desc: "Listing #17 listed successfully.",
  },
  {
    id: 3,
    desc: "Listing #17 listed successfully.",
  },
];

const Notifications = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <DashboardLayout>
      <Paper p="lg" className="space-y-8">
        <h1>Notifications</h1>
        <div className="space-y-4">
          {dummyData.map((singleData) => {
            return (
              <div
                key={singleData.id}
                className="bg-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-between space-y-5"
              >
                <div>
                  <p>{singleData.desc}</p>
                </div>

                {/* Icons */}
                <div className="flex items-center md:justify-between space-x-2">
                  <div className="hover:bg-gray-200 border-2 text-green-900 border-green-300 text-3xl p-1.5 rounded-full flex items-center justify-center cursor-pointer">
                    <TiTick />
                  </div>
                  <div className="hover:bg-gray-200 border-2 text-red-900 border-red-300 text-xl p-2.5 rounded-full flex items-center justify-center cursor-pointer">
                    <ImCross />
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="bg-gray-100 rounded-lg p-5 flex items-center justify-between">
            <p>Listing #17 listed successfully.</p>
            <p className="bg-red-300 text-red-900 rounded-full py-1.5 px-6 font-bold inline-block">
              Pending
            </p>
          </div> */}
        </div>
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
export default Notifications;

import { EditUserForm } from "@/components/forms";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core";
import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Image } from "next/image";
import { landingImages } from "@/data/landing-images";
import { Pagination } from "@mantine/core";

const dummyData = [
  {
    id: 1,
    desc: "Listing #17 listed successfully.",
    status: "Pending",
  },
  {
    id: 2,
    desc: "Completion of listing #12.",
    tokenOrNft: 20,
    isToken: true,
    status: "Pending",
  },
  {
    id: 3,
    desc: "Highest donor of Month May.",
    tokenOrNft: "#2",
    isNft: true,
    status: "Success",
  },
  {
    id: 1,
    desc: "Listing #17 listed successfully.",
    status: "Success",
  },
];

const List = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <DashboardLayout>
      <Paper p="lg" className="space-y-8">
        <h1>History</h1>
        <div className="space-y-4">
          {dummyData.map((singleData) => {
            return (
              <div
                key={singleData.id}
                className="bg-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-between space-y-5"
              >
                {singleData.isToken || singleData.isNft ? (
                  <div className="">
                    {/* Top Section */}
                    <div className="text-3xl font-bold">
                      <p>{singleData.tokenOrNft}</p>
                      {/* <Image
                      src={landingImages[0]}
                      width={100}
                      className="aspect-square"
                      height={100}
                    ></Image> */}
                    </div>

                    {/* Bottom Section */}
                    {singleData.isToken ? (
                      <p>tokens received</p>
                    ) : (
                      <p>NFT received</p>
                    )}
                  </div>
                ) : null}
                <p>Listing #17 listed successfully.</p>
                {singleData.status === "Pending" ? (
                  <p className="text-center bg-red-300 text-red-900 rounded-full py-1.5 px-6 font-bold inline-block">
                    Pending
                  </p>
                ) : (
                  <p className="text-center bg-green-300 text-green-900 rounded-full py-1.5 px-6 font-bold inline-block">
                    Success
                  </p>
                )}
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
export default List;

import { EditUserForm } from "@/components/forms";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ActionIcon, Badge, Paper, Text, Title, Tooltip } from "@mantine/core";
import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";

const List = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <h1>HI</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default List;

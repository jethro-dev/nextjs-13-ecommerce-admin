import prisma from "@/lib/prismadb";
import React from "react";

type Props = {
  params: { storeId: string };
};

const DashboardPage = async ({ params }: Props) => {
  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store:{store?.name}</div>;
};

export default DashboardPage;

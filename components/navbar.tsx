import { UserButton, auth } from "@clerk/nextjs";

import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";

type Props = {};

const Navbar = async (props: Props) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="h-16 flex items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

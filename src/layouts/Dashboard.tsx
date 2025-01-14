import { useIsMobile } from "@/lib/utils";
import {
  ArrowLeftRight,
  HandCoins,
  House,
  Logs,
  UserRound,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: any }) {
  const isMobile = useIsMobile();
  return (
    <div>
      <div className="w-full fixed top-0 left-0 flex z-50 justify-between h-14 bg-white px-8">
        <div className="flex gap-x-2 items-center">
          <HandCoins className="h-7 w-7" />
          <p className="text-lg font-bold my-auto">QuickShed</p>
        </div>
        <div className="py-4 gap-x-6 flex">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <Link to="/dashboard">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/all-transactions">Transactions</Link>
            </>
          )}
        </div>
      </div>
      <div className="pt-14 bg-gray-100 min-h-screen h-full p-4">
        {children ? children : <Outlet />}
      </div>
    </div>
  );
}

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div>
      <Popover open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
        <PopoverTrigger>
          <Logs className="h-7 w-7" />
        </PopoverTrigger>
        <PopoverContent className="grid gap-y-1 w-32 mr-1 mt-2 p-0 shadow-none">
          <div className="flex items-center gap-x-2 px-2 bg-gray-50 p-2">
            <House className="w-4 h-4 mt-0.5" />
            <Link to="/dashboard">Home</Link>
          </div>
          <div className="flex items-center gap-x-2 px-2 bg-gray-50 p-2">
            <UserRound className="w-4 h-4 mt-0.5" />
            <Link to="/profile">Profile</Link>
          </div>
          <div className="flex items-center gap-x-2 px-2 bg-gray-50 p-2">
            <ArrowLeftRight className="w-4 h-4 mt-0.5 rotate-90" />
            <Link to="/all-transactions">Transactions</Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

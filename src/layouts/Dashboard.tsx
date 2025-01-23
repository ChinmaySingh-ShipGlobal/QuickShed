import { useIsMobile } from "@/lib/utils";
import {
  ArrowLeftRight,
  DollarSign,
  HandCoins,
  House,
  Logs,
  UserRound,
} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: any }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 flex justify-between w-full px-8 bg-white h-14">
        <div
          className="flex items-center cursor-pointer gap-x-2"
          onClick={() => navigate("/dashboard")}
        >
          <HandCoins className="h-7 w-7" />
          <p className="my-auto text-lg font-bold">QuickShed</p>
        </div>
        <div className="flex py-4 gap-x-6">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <Link to="/dashboard">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/all-transactions">Transactions</Link>
              <Link to="/spend-area">Expenditure</Link>
              <Link to="/add-transaction">Add</Link>
            </>
          )}
        </div>
      </div>
      <div className="h-full min-h-screen p-4 bg-gray-100 pt-14">
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
        <PopoverContent className="grid w-32 p-0 mt-2 mr-1 shadow-none gap-y-1">
          <div className="flex items-center p-2 px-2 gap-x-2 bg-gray-50">
            <House className="w-4 h-4 mt-0.5" />
            <Link to="/dashboard">Home</Link>
          </div>
          <div className="flex items-center p-2 px-2 gap-x-2 bg-gray-50">
            <UserRound className="w-4 h-4 mt-0.5" />
            <Link to="/profile">Profile</Link>
          </div>
          <div className="flex items-center p-2 px-2 gap-x-2 bg-gray-50">
            <ArrowLeftRight className="w-4 h-4 mt-0.5 rotate-90" />
            <Link to="/all-transactions">Transactions</Link>
          </div>
          <div className="flex items-center p-2 px-2 gap-x-2 bg-gray-50">
            <ArrowLeftRight className="w-4 h-4 mt-0.5 rotate-90" />
            <Link to="/spend-area">Expenditure</Link>
          </div>
          <div className="flex items-center p-2 px-2 gap-x-2 bg-gray-50">
            <DollarSign className="w-4 h-4 mt-0.5" />
            <Link to="/add-transaction">Add</Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

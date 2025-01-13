import { useIsMobile } from "@/lib/utils";
import { HandCoins, House, Logs, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
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
      <div className="w-full fixed top-0 left-0 flex justify-between h-14 bg-white px-8">
        <div className="flex gap-x-2 items-center">
          <HandCoins className="h-7 w-7" />
          <p className="text-lg font-bold my-auto">QuickShed</p>
        </div>
        <div className="py-4 gap-x-6 flex">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <Link to="#">Home</Link>
              <Link to="#">Profile</Link>
            </>
          )}
        </div>
      </div>
      <div className="mt-14 bg-gray-100 h-screen">{...children}</div>
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
            <Link to="#">Home</Link>
          </div>
          <div className="flex items-center gap-x-2 px-2 bg-gray-50 p-2">
            <UserRound className="w-4 h-4 mt-0.5" />
            <Link to="#">Profile</Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

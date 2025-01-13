import DashboardLayout from "@/layouts/Dashboard";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center flex-col">
        <Card className="max-w-lg w-full bg-transparent border-none shadow-none">
          <CardHeader className="flex-row justify-between items-center space-y-0 gap-x-2 w-full max-w-lg">
            <div className="bg-white p-4 rounded-lg w-full">
              <p className="text-sm">Income</p>
              <div className="flex gap-x-2 items-center mt-1">
                <ArrowUp className="w-4 h-4 text-white bg-teal-600 p-0.5 rounded-md" />
                <p className="font-semibold">Rs. 58,678</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg w-full">
              <p className="text-sm">Expense</p>
              <div className="flex gap-x-2 items-center mt-1">
                <ArrowDown className="w-4 h-4 text-white bg-red-600 p-0.5 rounded-md" />
                <p className="font-semibold">Rs. 8,678</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
}

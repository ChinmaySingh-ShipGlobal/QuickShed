import DashboardLayout from "@/layouts/Dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Transactions } from "./Dashboard";
import { ArrowDown, ArrowUp, IndianRupee } from "lucide-react";
export default function AllTransactions() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center flex-col">
        <Card className="max-w-lg w-full mt-8 shadow-none">
          <CardHeader className="space-y-0 p-4">
            <CardTitle className="text-lg font-bold">Transactions</CardTitle>
            <CardDescription className="text-xs pt-1"></CardDescription>
          </CardHeader>
          <CardContent className="max-h-128 lg:max-h-152 overflow-auto">
            {Transactions.map((transaction) => {
              return (
                <div className="flex justify-between my-5">
                  <div className="flex items-center gap-x-4">
                    {transaction.type === "income" ? (
                      <ArrowUp className="text-white bg-teal-600 p-1 h-8 w-8 rounded-lg" />
                    ) : (
                      <ArrowDown className="text-white bg-orange-500 p-1 h-8 w-8 rounded-lg" />
                    )}
                    <div className="flex flex-col">
                      <p className="text-base font-medium">
                        {transaction.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {transaction.bank}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="font-bold h-4 w-4" />
                    <p className="font-bold">{transaction.amount}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

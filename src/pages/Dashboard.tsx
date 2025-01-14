import DashboardLayout from "@/layouts/Dashboard";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp, IndianRupee } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const total = 67356;
const income = 58678;

export default function Dashboard() {
  const incomeChartData = [
    { browser: "balance", visitors: income, fill: "#009990" },
    { browser: "", visitors: total - income, fill: "#EFF3EA" },
  ];
  const expenseChartData = [
    { browser: "expense", visitors: total - income, fill: "#8F1616" },
    { browser: "", visitors: income, fill: "#EFF3EA" },
  ];

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

        <Tabs defaultValue="income" className="w-[400px]">
          <TabsContent value="income">
            <AmountPieChart chartData={incomeChartData} amount={income} />
          </TabsContent>
          <TabsContent value="expense">
            <AmountPieChart
              chartData={expenseChartData}
              amount={total - income}
            />
          </TabsContent>
          <div className="flex justify-center items-center">
            <TabsList>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expense</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}

("use client");

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "expense",
  },
} satisfies ChartConfig;

export function AmountPieChart({
  chartData,
  amount,
}: {
  chartData: any;
  amount: string | number;
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          outerRadius={80}
          innerRadius={60}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy || 0}
                      className="text-black font-semibold"
                    >
                      Rs. {amount}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

const RecentTransactions = () => {
  const today = new Date();
  return (
    <Card className="max-w-lg w-full mt-8 shadow-none">
      <CardHeader className="space-y-0">
        <CardTitle className="text-lg font-bold">Recent Transactions</CardTitle>
        <CardDescription className="text-xs pt-1">
          Updated on {today.toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Transactions.slice(0, 2).map((transaction) => {
          return (
            <div className="flex justify-between my-3">
              <div className="flex items-center gap-x-4">
                {transaction.type === "income" ? (
                  <ArrowUp className="text-white bg-teal-600 p-1 h-8 w-8 rounded-lg" />
                ) : (
                  <ArrowDown className="text-white bg-orange-500 p-1 h-8 w-8 rounded-lg" />
                )}
                <div className="flex flex-col">
                  <p className="text-base font-medium">{transaction.title}</p>
                  <p className="text-gray-500 text-sm">{transaction.bank}</p>
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
  );
};

export const Transactions = [
  {
    title: "ATM Withdrawal",
    amount: "500",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Online Transfer",
    amount: "3020",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Grocery Shopping",
    amount: "1500",
    bank: "HDFC Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Salary Credit",
    amount: "45000",
    bank: "Axis Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Electricity Bill Payment",
    amount: "2200",
    bank: "SBI Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "ATM Withdrawal",
    amount: "500",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Online Transfer",
    amount: "3020",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Grocery Shopping",
    amount: "1500",
    bank: "HDFC Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Salary Credit",
    amount: "45000",
    bank: "Axis Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Electricity Bill Payment",
    amount: "2200",
    bank: "SBI Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "ATM Withdrawal",
    amount: "500",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Online Transfer",
    amount: "3020",
    bank: "ICICI Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Grocery Shopping",
    amount: "1500",
    bank: "HDFC Bank xxxxxxxx0000",
    type: "expense",
  },
  {
    title: "Salary Credit",
    amount: "45000",
    bank: "Axis Bank xxxxxxxx0000",
    type: "income",
  },
  {
    title: "Electricity Bill Payment",
    amount: "2200",
    bank: "SBI Bank xxxxxxxx0000",
    type: "expense",
  },
];

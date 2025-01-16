import DashboardLayout from "@/layouts/Dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, IndianRupee } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "Food", amount: 275, fill: "#FF5733" },
  { category: "Online Shopping", amount: 200, fill: "#33C3FF" },
  { category: "Cash Withdrawal", amount: 287, fill: "#FF9A33" },
  { category: "Grocery", amount: 173, fill: "#33FF57" },
  { category: "Medicine", amount: 190, fill: "#FF33A1" },
  { category: "Transport", amount: 190, fill: "#9A33FF" },
  { category: "Other", amount: 190, fill: "#A6A6A6" },
];

const chartConfig = {
  food: { label: "Food", color: "#FF5733" },
  onlineShopping: { label: "Online Shopping", color: "#33C3FF" },
  withdrawal: { label: "Cash Withdrawal", color: "#FF9A33" },
  grocery: { label: "Grocery", color: "#33FF57" },
  medicine: { label: "Medicine", color: "#FF33A1" },
  transport: { label: "Transport", color: "#9A33FF" },
  other: { label: "Other", color: "#A6A6A6" },
} satisfies ChartConfig;

const Transactions = [
  {
    title: "Food",
    amount: "275",
    category: "Food",
    color: "#FF5733",
  },
  {
    title: "Online Shopping",
    amount: "200",
    category: "Online Shopping",
    color: "#33C3FF",
  },
  {
    title: "Cash Withdrawal",
    amount: "287",
    category: "Cash Withdrawal",
    color: "#FF9A33",
  },
  {
    title: "Grocery",
    amount: "173",
    category: "Grocery",
    color: "#33FF57",
  },
  {
    title: "Medicine",
    amount: "190",
    category: "Medicine",
    color: "#FF33A1",
  },
  {
    title: "Transport",
    amount: "190",
    category: "Transport",
    color: "#9A33FF",
  },
  {
    title: "Other",
    amount: "190",
    category: "Other",
    color: "#A6A6A6",
  },
];

export default function SpendArea() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center">
        {/* Spend Chart */}
        <Card className="w-full max-w-lg mt-8 shadow-none">
          <CardHeader className="p-4 space-y-0">
            <CardTitle className="text-lg font-bold">Top Spend Areas</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-h-128 lg:max-h-152">
            <SpendChart />
          </CardContent>
        </Card>
        {/* Transactions */}
        <Card className="w-full max-w-lg px-0 mt-6 bg-gray-100 border-none shadow-none">
          <CardContent className="px-0 overflow-auto max-h-128 lg:max-h-152">
            {Transactions.map((transaction) => (
              <div
                className="flex justify-between p-4 px-6 my-2 bg-white rounded-lg"
                key={transaction.title}
              >
                <div className="flex items-center gap-x-4">
                  <ArrowDown
                    className="w-8 h-8 p-1 text-white rounded-lg"
                    style={{ backgroundColor: transaction.color }}
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-medium">{transaction.title}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 font-bold" />
                  <p className="font-bold">{transaction.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export function SpendChart() {
  const totalAmount = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.amount, 0),
    []
  );

  return (
    <div className="flex flex-col">
      <CardContent className="flex-1 pb-0">
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
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
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
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-foreground"
                        >
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Expense
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}

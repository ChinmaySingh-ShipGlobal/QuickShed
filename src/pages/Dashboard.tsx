import DashboardLayout from "@/layouts/Dashboard";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            {" "}
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

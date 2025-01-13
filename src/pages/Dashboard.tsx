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
      <Component />
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
const total = 100000;
const income = 58678;
const chartData = [
  { browser: "balance", visitors: income, fill: "#009990" },
  { browser: "", visitors: total - income, fill: "#EFF3EA" },
];

const chartConfig = {
  visitors: {
    label: "expense",
  },
} satisfies ChartConfig;

export function Component() {
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
          innerRadius={60}
          stroke="#d3d3d3"
          strokeWidth={1}
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
                    Safe to spend
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="text-black font-semibold"
                    >
                      Rs. {income}
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

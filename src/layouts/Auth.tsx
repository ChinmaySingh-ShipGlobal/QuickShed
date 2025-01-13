import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HandCoins } from "lucide-react";

export default function Auth({ children }: { children: any }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full md:max-w-sm my-auto m-4">
        <CardHeader>
          <CardTitle>
            <HandCoins className="h-20 w-20 rounded-full bg-blue-200" />
            <p className="mt-2 font-normal text-lg">Welcome to</p>
            <p className="text-4xl font-semibold">QuickShed</p>
          </CardTitle>
          <CardDescription className="w-2/3">
            A place where you can track all your expenses and incomes . . .
            <p className="mt-2 text-black">Let's Get Started . . .</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-8">{...children}</CardContent>
      </Card>
    </div>
  );
}

import DashboardLayout from "@/layouts/Dashboard";
import { Card, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileSchema } from "@/schemas/Profile";

export default function Profile() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Chinmay",
      email: "nahibataunga@gmail.com",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);
  }

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center flex-col">
        <Card className="max-w-2xl w-full bg-transparent border-none shadow-none">
          <CardHeader className="flex flex-col items-center justify-center space-y-4">
            <p className="text-2xl font-medium">Profile</p>
            <User className="h-20 w-20 p-1 border rounded-full" />
          </CardHeader>
        </Card>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-2 mt-8 w-full max-w-lg"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      className="mt-0 bg-white h-14"
                      placeholder="Enter your name here . . ."
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="mt-0 bg-white h-14"
                      placeholder="Enter your email here . . ."
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="mt-0 bg-white h-14"
                      placeholder="Enter your password here . . ."
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </DashboardLayout>
  );
}

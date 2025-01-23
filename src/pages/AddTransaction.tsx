import DashboardLayout from "@/layouts/Dashboard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AddTransaction() {
  const incomeForm = useForm();
  const expenseForm = useForm();
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [newAccountCategory, setNewAccountCategory] = useState("");

  const [selectValues, setSelectValues] = useState([
    { key: "Food", value: "Food", subCategory: [] },
    { key: "OnlineShopping", value: "Online Shopping", subCategory: [] },
    { key: "CashWithdrawal", value: "Cash Withdrawal", subCategory: [] },
    {
      key: "Grocery",
      value: "Grocery",
      subCategory: ["Fruits", "Vegetables", "Dairy", "Bakery", "Others"],
    },
    { key: "Medicine", value: "Medicine", subCategory: [] },
    { key: "Transport", value: "Transport", subCategory: [] },
    { key: "Other", value: "Other", subCategory: [] },
  ]);
  const [selectAccountValues, setSelectAccountValues] = useState([
    { key: "Cash", value: "Cash" },
    { key: "Accounts", value: "Accounts" },
    { key: "Card", value: "Card" },
  ]);
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  const handleAddCategory = () => {
    if (
      newCategory.trim() &&
      !selectValues.find((item) => item.value === newCategory)
    ) {
      setSelectValues((prev) => [
        ...prev,
        {
          key: newCategory.replace(/\s+/g, ""),
          value: newCategory,
          subCategory: [],
        },
      ]);
      setNewCategory("");
    }
  };

  const handleAddSubCategory = (categoryKey: string) => {
    if (
      newSubCategory.trim() &&
      !selectValues.some(
        (item) =>
          item.key === categoryKey &&
          item.subCategory &&
          item.subCategory.includes(newSubCategory)
      )
    ) {
      setSelectValues((prev) =>
        prev.map((item) =>
          item.key === categoryKey
            ? {
                ...item,
                subCategory: item.subCategory
                  ? [...item.subCategory, newSubCategory]
                  : [newSubCategory],
              }
            : item
        )
      );
      setNewSubCategory("");
    }
  };

  const handleAddAccountCategory = () => {
    if (
      newAccountCategory.trim() &&
      !selectAccountValues.find((item) => item.value === newAccountCategory)
    ) {
      setSelectAccountValues((prev) => [
        ...prev,
        {
          key: newAccountCategory.replace(/\s+/g, ""),
          value: newAccountCategory,
        },
      ]);
      setNewAccountCategory("");
    }
  };

  function onSubmit() {
    console.log(incomeForm.getValues());
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center">
        <Card className="w-full max-w-lg mt-8 shadow-none">
          <CardHeader className="p-4 space-y-0">
            <CardTitle className="text-lg font-bold text-center">
              Add Your New Transaction Details
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-h-128 lg:max-h-152">
            <Tabs defaultValue="income" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="income">INCOME</TabsTrigger>
                <TabsTrigger value="expense">EXPENSE</TabsTrigger>
              </TabsList>
              <TabsContent value="income">
                {/* income card */}
                <Card>
                  <CardHeader className="hidden" />
                  <CardTitle className="hidden" />
                  <CardDescription className="hidden" />
                  <CardContent className="p-4 space-y-2">
                    <Form {...incomeForm}>
                      <form className="space-y-4">
                        <FormField
                          control={incomeForm.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover
                                open={isPopOverOpen}
                                onOpenChange={setIsPopOverOpen}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(value) => {
                                      field.onChange(value?.toISOString());
                                      setIsPopOverOpen(false);
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription className="hidden" />

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={incomeForm.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input placeholder="Amount" {...field} />
                              </FormControl>
                              <FormDescription className="hidden" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={incomeForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <div className="flex items-center gap-2 px-4 my-2">
                                      <Input
                                        placeholder="New Category"
                                        className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                        value={newCategory}
                                        onChange={(e) =>
                                          setNewCategory(e.target.value)
                                        }
                                      />
                                      <Plus
                                        className="w-4 h-4"
                                        onClick={handleAddCategory}
                                      />
                                    </div>
                                    {selectValues.map((item, index) => (
                                      <SelectItem key={index} value={item.key}>
                                        {item.value}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={incomeForm.control}
                          name="subCategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SubCategory</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {incomeForm.watch("category") ? (
                                      <div>
                                        <div className="flex items-center gap-2 px-4 my-2">
                                          <Input
                                            placeholder="New Category"
                                            className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                            value={newSubCategory}
                                            onChange={(e) =>
                                              setNewSubCategory(e.target.value)
                                            }
                                          />
                                          <Plus
                                            className="w-4 h-4"
                                            onClick={() =>
                                              handleAddSubCategory(
                                                incomeForm.watch("category")
                                              )
                                            }
                                          />
                                        </div>
                                        {selectValues
                                          .find(
                                            (item) =>
                                              item.value ===
                                              incomeForm.watch("category")
                                          )
                                          ?.subCategory?.map((item, index) => (
                                            <SelectItem
                                              key={index}
                                              value={item}
                                            >
                                              {item}
                                            </SelectItem>
                                          ))}
                                      </div>
                                    ) : (
                                      <div>Please select category first</div>
                                    )}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={incomeForm.control}
                          name="account"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Account</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <div className="flex items-center gap-2 px-4 my-2">
                                      <Input
                                        placeholder="New Category"
                                        className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                        value={newAccountCategory}
                                        onChange={(e) =>
                                          setNewAccountCategory(e.target.value)
                                        }
                                      />

                                      <Plus
                                        className="w-4 h-4"
                                        onClick={handleAddAccountCategory}
                                      />
                                    </div>
                                    {selectAccountValues.map((item, index) => (
                                      <SelectItem key={index} value={item.key}>
                                        {item.value}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={incomeForm.control}
                          name="note"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Note</FormLabel>
                              <FormControl>
                                <Input placeholder="Note" {...field} />
                              </FormControl>
                              <FormDescription className="hidden" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={incomeForm.handleSubmit(onSubmit)}>
                      Save changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="expense">
                {/* expense card */}
                <Card>
                  <CardHeader className="hidden" />
                  <CardTitle className="hidden" />
                  <CardDescription className="hidden" />
                  <CardContent className="p-4 space-y-2">
                    <Form {...expenseForm}>
                      <form className="space-y-4">
                        <FormField
                          control={expenseForm.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover
                                open={isPopOverOpen}
                                onOpenChange={setIsPopOverOpen}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(value) => {
                                      field.onChange(value?.toISOString());
                                      setIsPopOverOpen(false);
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription className="hidden" />

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input placeholder="Amount" {...field} />
                              </FormControl>
                              <FormDescription className="hidden" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <div className="flex items-center gap-2 px-4 my-2">
                                      <Input
                                        placeholder="New Category"
                                        className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                        value={newCategory}
                                        onChange={(e) =>
                                          setNewCategory(e.target.value)
                                        }
                                      />

                                      <Plus
                                        className="w-4 h-4"
                                        onClick={handleAddCategory}
                                      />
                                    </div>

                                    {selectValues.map((item, index) => (
                                      <SelectItem key={index} value={item.key}>
                                        {item.value}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="subCategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SubCategory</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {expenseForm.watch("category") ? (
                                      <div>
                                        <div className="flex items-center gap-2 px-4 my-2">
                                          <Input
                                            placeholder="New Category"
                                            className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                            value={newSubCategory}
                                            onChange={(e) =>
                                              setNewSubCategory(e.target.value)
                                            }
                                          />
                                          <Plus
                                            className="w-4 h-4"
                                            onClick={() =>
                                              handleAddSubCategory(
                                                expenseForm.watch("category")
                                              )
                                            }
                                          />
                                        </div>
                                        {selectValues
                                          .find(
                                            (item) =>
                                              item.value ===
                                              expenseForm.watch("category")
                                          )
                                          ?.subCategory?.map((item, index) => (
                                            <SelectItem
                                              key={index}
                                              value={item}
                                            >
                                              {item}
                                            </SelectItem>
                                          ))}
                                      </div>
                                    ) : (
                                      <div>Please select category first</div>
                                    )}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="account"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Account</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <div className="flex items-center gap-2 px-4 my-2">
                                      <Input
                                        placeholder="New Category"
                                        className="w-full text-sm border-none shadow-none ring-0 placeholder:font-normal"
                                        value={newAccountCategory}
                                        onChange={(e) =>
                                          setNewAccountCategory(e.target.value)
                                        }
                                      />

                                      <Plus
                                        className="w-4 h-4"
                                        onClick={handleAddAccountCategory}
                                      />
                                    </div>
                                    {selectAccountValues.map((item, index) => (
                                      <SelectItem key={index} value={item.key}>
                                        {item.value}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="note"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Note</FormLabel>
                              <FormControl>
                                <Input placeholder="Note" {...field} />
                              </FormControl>
                              <FormDescription className="hidden" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

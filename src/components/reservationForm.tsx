import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect } from "react";

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
  loading,
}: {
  availableTimes: string[];
  dispatchOnDateChange: any;
  submitData: any;
  loading: boolean;
}) => {
  const formSchema = z.object({
    "reservation-date": z.date({
      required_error: "This field is required.",
    }),
    "reservation-time": z
      .string()
      .min(1, { message: "This field is required" }),
    "guest-count": z.coerce
      .number({
        invalid_type_error: "This field must be a number",
      })
      .min(1, { message: "This field is required" }),
    occasion: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "reservation-date": new Date(),
      "reservation-time": "17:00",
      "guest-count": 1,
      occasion: "none",
    },
  });

  const changedDate = form.watch("reservation-date");
  useEffect(() => {
    if (changedDate !== undefined) {
      dispatchOnDateChange(changedDate);
    }
  }, [changedDate, dispatchOnDateChange]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitData(values);
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="lg:text-lg bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">An Evening to Remember</CardTitle>
        <CardDescription className="lg:text-md">
          Celebrate life’s moments with authentic Mediterranean cuisine.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onReset={onReset}
            className="space-y-8 @container"
          >
            <div className="grid grid-cols-12 gap-4">
              <FormField
                control={form.control}
                name="reservation-date"
                render={({ field }) => (
                  <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="flex shrink-0">Date</FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="justify-start text-left font-normal w-full"
                              id="reservation-date"
                              name=""
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span className="text-muted-foreground">
                                  Pick a date
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" onSelect={field.onChange} />
                          </PopoverContent>
                        </Popover>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reservation-time"
                render={({ field }) => (
                  <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="flex shrink-0">Time</FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <Select
                          key="select-1"
                          //id="reservation-time"
                          {...field}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full ">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimes.map((timing) => (
                              <SelectItem key={timing} value={timing}>
                                {timing}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guest-count"
                render={({ field }) => (
                  <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="flex shrink-0">
                      Number of Guests
                    </FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            key="number-input-0"
                            placeholder="1"
                            type="number"
                            id="guest-count"
                            className=" "
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="flex shrink-0">
                      Special Occasion
                    </FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <Select
                          key="select-0"
                          //id="occasion"
                          //className=""
                          {...field}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full ">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem key="none" value="none">
                              None
                            </SelectItem>
                            <SelectItem key="birthday" value="birthday">
                              Birthday
                            </SelectItem>

                            <SelectItem key="anniversary" value="anniversary">
                              Anniversary
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                name="submit-button-0"
                render={() => (
                  <FormItem className="col-span-12 md:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="hidden shrink-0">Reserve Table</FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <Button
                          key="submit-button-0"
                          id="submit-button-0"
                          className="w-full gap-4 py-6 lg:px-8 cursor-pointer bg-gradient-to-b from-yellow-400 to-amber-400 text-black lg:text-md"
                          effect="ringHover"
                          type="submit"
                        >
                          {loading ? (
                            <div className="flex items-center gap-2">
                              <span className="animate-spin h-4 w-4 border-2 border-t-transparent border-black rounded-full" />
                              Booking your table...
                            </div>
                          ) : (
                            "Reserve Table"
                          )}
                          
                        </Button>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="reset-button-0"
                render={() => (
                  <FormItem className="col-span-12 md:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                    <FormLabel className="hidden shrink-0">Reset</FormLabel>

                    <div className="w-full">
                      <FormControl>
                        <Button
                          key="reset-button-0"
                          id="reset-button-0"
                          className="w-full gap-4 py-6 lg:px-6 cursor-pointer lg:text-md"
                          type="reset"
                          variant="outline"
                          effect="ringHover"
                        >
                          Reset
                        </Button>
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
             
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;

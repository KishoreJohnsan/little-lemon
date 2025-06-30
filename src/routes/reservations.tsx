"use client";
import ReservationForm from "@/components/reservationForm";
import { fetchAPI, submitAPI } from "@/lib/api";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { format } from "date-fns";
import { useReducer, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/reservations")({
  component: Reservation,
});

const updateTimes = (availableTimes: string[], date: Date) => {
  const response = fetchAPI(date);
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = fetchAPI(new Date());

export default function Reservation() {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    initializeTimes
  );
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const submitData = async (formData: any) => {
    setLoading(true);
    const date = format(formData["reservation-date"], "PPP");
    const timeToFormat = formData["reservation-time"];
    const datetime = new Date("1970-01-01T" + timeToFormat);
    const time = format(datetime, "p");
    try {
      const resp = await new Promise((resolve) => {
        setTimeout(() => {
          const result = submitAPI(formData);
          resolve(result);
        }, 2000);
      });

      if (resp) {
        toast.success("Reservation confirmed", {
          description: `A cozy table for ${formData["guest-count"]} awaits you on ${date} at ${time}. We look forward to welcoming you.`,
        });
        navigate({
          to: "/",
        });
      } else {
        toast.error("Error in Reserving Table", {
          description: `Please try again`,
        });
        navigate({
          to: "/",
        });
      }
    } catch (error) {
      toast.error("Error in Reserving Table", {
        description: `Please try again`,
      });
      navigate({
        to: "/",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-xl pt-20 pb-6 lg:pb-10 lg:pt-24 px-6 sm:px-10">
        <ReservationForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
          loading={loading}
        />
      </div>
    </div>
  );
}

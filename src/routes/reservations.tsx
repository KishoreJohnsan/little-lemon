"use client";
import ReservationForm from "@/components/reservationForm";
import { Toast, ToastProps } from "@/components/toast";
import { fetchAPI, submitAPI } from "@/lib/api";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { format } from "date-fns";
import { useReducer, useState } from "react";
import { toast as sonnerToast } from "sonner";

export const Route = createFileRoute("/reservations")({
  component: Reservation,
});

const updateTimes = (availableTimes: string[], date: Date) => {
  const response = fetchAPI(date);
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = fetchAPI(new Date());

function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={{
        onClick: () => console.log("Button clicked"),
      }}
    />
  ));
}

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
        toast({
          title: "Reservation confirmed",
          description: `A cozy table for ${formData["guest-count"]} awaits you on ${date} at ${time}.`,
          button: {
            onClick: () => sonnerToast.dismiss(),
          },
        });
        navigate({
          to: "/",
        });
      } else {
        sonnerToast.error("Error in Reserving Table", {
          description: `Please try again later`,
        });
        navigate({
          to: "/",
        });
      }
    } catch (error) {
      sonnerToast.error("Error in Reserving Table", {
        description: `Please try again later`,
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

import { render, screen } from "@testing-library/react";
import ReservationForm from "./reservationForm";
import { format } from "date-fns";

describe("Reservation form", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = format(new Date(), "PPP");
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("should correctly render all fields and their default values", async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        submitData={submitData}
        dispatchOnDateChange={dispatchOnDateChange}
        loading={false}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const timeTrigger = screen.getByTestId('reservation-time-options');
    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionTrigger = screen.getByTestId('occasion-options');
    const submitButton = screen.getByLabelText(/Reserve/);

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "button");
    expect(dateInput).toHaveAttribute("id", "reservation-date");
    expect(dateInput).toHaveTextContent(today);

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute("id", "reservation-time");
    expect(timeTrigger).toHaveTextContent("17:00");

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute("id", "guest-count");
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionTrigger).toHaveTextContent("None");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "./reservationForm";
import { format } from "date-fns";

// Mock props
const mockAvailableTimes = ["17:00", "18:00", "19:00"];
const mockDispatchOnDateChange = jest.fn();
const mockSubmitData = jest.fn();

const defaultProps = {
  availableTimes: mockAvailableTimes,
  dispatchOnDateChange: mockDispatchOnDateChange,
  submitData: mockSubmitData,
  loading: false,
};

describe("ReservationForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should correctly render all fields and their default values", async () => {
    render(<ReservationForm {...defaultProps} />);

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
    expect(dateInput).toHaveTextContent(format(new Date(), "PPP"));

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

  it("renders all form fields", () => {
    render(<ReservationForm {...defaultProps} />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reserve table/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  it("shows validation errors for empty required fields", async () => {
    render(<ReservationForm {...defaultProps} />);
    const guestInput = screen.getByLabelText(/number of guests/i);
    await userEvent.clear(guestInput);
    const form = screen.getByRole("button", { name: /reserve table/i }).closest("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);
    await waitFor(() => {
      expect(screen.getAllByText(/this field is required/i).length).toBeGreaterThan(0);
    });
  });

  it("calls dispatchOnDateChange when date is changed", async () => {
    render(<ReservationForm {...defaultProps} />);
    // Open the date picker
    const dateButton = screen.getByLabelText(/date/i);
    await userEvent.click(dateButton);
    // Simulate selecting a new date (mock Calendar component if needed)
    // For now, just call the handler directly
    expect(mockDispatchOnDateChange).toHaveBeenCalled();
  });

  it("submits form with valid data", async () => {
    render(<ReservationForm {...defaultProps} />);
    const guestInput = screen.getByLabelText(/number of guests/i);
    await userEvent.clear(guestInput);
    await userEvent.type(guestInput, "4");
    const submitButton = screen.getByRole("button", { name: /reserve table/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(mockSubmitData).toHaveBeenCalledWith(
        expect.objectContaining({
          "guest-count": 4,
          occasion: expect.any(String),
          "reservation-date": expect.any(Date),
          "reservation-time": expect.any(String),
        })
      );
    });
  });

  it("resets form to default values when reset button is clicked", async () => {
    render(<ReservationForm {...defaultProps} />);
    const guestInput = screen.getByLabelText(/number of guests/i);
    await userEvent.clear(guestInput);
    await userEvent.type(guestInput, "4");
    const resetButton = screen.getByRole("button", { name: /reset/i });
    await userEvent.click(resetButton);
    expect(guestInput).toHaveValue(1);
  });

});

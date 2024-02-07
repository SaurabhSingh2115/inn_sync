// BookingForm.jsx
import React, { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function BookingForm({ onSubmit }) {
  const [booking, setBooking] = useState({
    startDate: "",
    endDate: "",
    numNights: "",
    numGuests: "",
    totalPrice: "",
    status: "",
    guests: { fullName: "", email: "" },
    cabins: { name: "" },
  });

  const handleChange = (event) => {
    if (event.target.id === "fullName" || event.target.id === "email") {
      setBooking({
        ...booking,
        guests: { ...booking.guests, [event.target.id]: event.target.value },
      });
    } else if (event.target.id === "name") {
      setBooking({
        ...booking,
        cabins: { name: event.target.value },
      });
    } else {
      setBooking({ ...booking, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(booking);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Start Date" error={""}>
        <Input
          type="date"
          id="startDate"
          value={booking.startDate}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="End Date" error={""}>
        <Input
          type="date"
          id="endDate"
          value={booking.endDate}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Number of Nights" error={""}>
        <Input
          type="number"
          id="numNights"
          value={booking.numNights}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Number of Guests" error={""}>
        <Input
          type="number"
          id="numGuests"
          value={booking.numGuests}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Total Price" error={""}>
        <Input
          type="number"
          id="totalPrice"
          value={booking.totalPrice}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Status" error={""}>
        <Input
          type="text"
          id="status"
          value={booking.status}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Guest Full Name" error={""}>
        <Input
          type="text"
          id="fullName"
          value={booking.guests.fullName}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Guest Email" error={""}>
        <Input
          type="text"
          id="email"
          value={booking.guests.email}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Cabin Name" error={""}>
        <Input
          type="text"
          id="name"
          value={booking.cabins.name}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit">Create Booking</Button>
      </FormRow>
    </Form>
  );
}

export default BookingForm;

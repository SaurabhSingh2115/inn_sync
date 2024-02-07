import React from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function BookingForm({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <FormRow label="Cabin" error={""}>
        <Input type="text" id="cabin" />
      </FormRow>

      <FormRow label="Guest" error={""}>
        <Input type="text" id="guest" />
      </FormRow>

      <FormRow label="Dates" error={""}>
        <Input type="text" id="dates" />
      </FormRow>

      <FormRow label="Amount" error={""}>
        <Input type="text" id="amount" />
      </FormRow>

      <FormRow label="Confirm Amount" error={""}>
        <Input type="text" id="amountConfirm" />
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

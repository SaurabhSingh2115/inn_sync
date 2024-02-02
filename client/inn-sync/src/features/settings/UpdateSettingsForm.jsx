import React, { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const sampleSettings = {
  minNights: 1,
  maxNights: 10,
  maxGuests: 8,
  breakfastPrice: 50,
};

function UpdateSettingsForm({ settings = sampleSettings }) {
  const [breakfastPrice, setBreakfastPrice] = useState(settings.breakfastPrice);

  const handleBreakfastPriceClick = () => {
    setBreakfastPrice((prevPrice) => prevPrice + 5);
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          min="0"
          defaultValue={settings.minNights}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          min="0"
          defaultValue={settings.maxNights}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          min="0"
          defaultValue={settings.maxGuests}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          min="0"
          value={breakfastPrice}
          onClick={handleBreakfastPriceClick}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

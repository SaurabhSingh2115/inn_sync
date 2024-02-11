import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function SettingsForm() {
  const [settings, setSettings] = useState({
    minNights: "",
    maxNights: "",
    maxGuests: "",
    breakfastPrice: "",
  });
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      axios
        .get(`${import.meta.env.VITE_RENDER_API_URL}/settings`)
        .then((response) => {
          setSettings(response.data);
          setRefresh(false);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [refresh]);

  const handleChange = (event) => {
    setSettings({ ...settings, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${import.meta.env.VITE_RENDER_API_URL}/settings`, settings)
      .then((response) => {
        console.log("Success:", response.data);
        setRefresh(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Minimum Nights">
        <Input
          type="number"
          id="minNights"
          value={settings.minNights}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Maximum Nights">
        <Input
          type="number"
          id="maxNights"
          value={settings.maxNights}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Maximum Guests">
        <Input
          type="number"
          id="maxGuests"
          value={settings.maxGuests}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow label="Breakfast Price">
        <Input
          type="number"
          id="breakfastPrice"
          value={settings.breakfastPrice}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <Button type="submit">Update Settings</Button>
      </FormRow>
    </Form>
  );
}

export default SettingsForm;

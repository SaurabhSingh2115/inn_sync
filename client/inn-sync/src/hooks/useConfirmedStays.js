import { useState, useEffect } from "react";
import axios from "axios";

function useConfirmedStays() {
  const [confirmedStays, setConfirmedStays] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_RENDER_API_URL}/bookings`)
      .then((response) => {
        console.log("Received data:", response.data);
        const checkedInStays = response.data.filter(
          (booking) => booking.status === "checked-in"
        );
        setConfirmedStays(checkedInStays);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  return confirmedStays;
}

export default useConfirmedStays;

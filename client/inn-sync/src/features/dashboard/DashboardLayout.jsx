import styled from "styled-components";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import useConfirmedStays from "../../hooks/useConfirmedStays";
import Stats from "./Stats";
import { useDarkMode } from "../../context/DarkModeContext";
import { useState, useEffect } from "react";
import axios from "axios";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const numDays = 30;
const cabinCount = 8;
/*
We need to distinguish between two types of data here:
1) BOOKINGS: the actual sales. For example, in the last 30 days, the hotel might have sold 10 bookings online, but these guests might only arrive and check in in the far future (or not, as booking also happen on-site)
2) STAYS: the actual check-in of guests arriving for their bookings. We can identify stays by their startDate, together with a status of either 'checked-in' (for current stays) or 'checked-out' (for past stays)
*/

function DashboardLayout() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_RENDER_API_URL}/bookings`)
      .then((response) => {
        console.log("Received data:", response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  const confirmedStays = useConfirmedStays();
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <div>Today's activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <>
        <SalesChart />
      </>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

import styled from "styled-components";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const confirmedStays = [
  { numNights: 1 },
  { numNights: 2 },
  { numNights: 2 },
  { numNights: 3 },
  { numNights: 4 },
  { numNights: 5 },
  { numNights: 5 },
  { numNights: 6 },
  { numNights: 7 },
  { numNights: 8 },
  { numNights: 9 },
  { numNights: 10 },
  { numNights: 15 },
  { numNights: 21 },
  { numNights: 22 },
];
/*
We need to distinguish between two types of data here:
1) BOOKINGS: the actual sales. For example, in the last 30 days, the hotel might have sold 10 bookings online, but these guests might only arrive and check in in the far future (or not, as booking also happen on-site)
2) STAYS: the actual check-in of guests arriving for their bookings. We can identify stays by their startDate, together with a status of either 'checked-in' (for current stays) or 'checked-out' (for past stays)
*/

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <>
        <SalesChart />
      </>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

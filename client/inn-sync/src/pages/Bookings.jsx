import React, { useState, useEffect } from "react";
import BookingForm from "../features/bookings/BookingForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";
import Tag from "../ui/Tag";
import axios from "axios";
import Pagination from "../ui/Pagination";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 1rem;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 1rem;

    /* & div:nth-child(3) {
          text-align: left;
        } */
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 1.6rem;
  padding-right: 2.4rem;
`;
const CreateBookingButton = styled(Button)`
  position: absolute;
  right: 0;
`;

const PAGE_SIZE = 10;
function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [totalBookingsCount, setTotalBookingsCount] = useState(0);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const openBookingForm = () => {
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  useEffect(() => {
    if (refresh) {
      // Add this line
      axios
        .get(`${import.meta.env.VITE_RENDER_API_URL}/bookings`)
        .then((response) => {
          console.log("Received data:", response.data);
          setBookings(response.data);
          setTotalBookingsCount(response.data.length);
          setRefresh(false); // Add this line
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }
  }, [refresh]); // Modify this line

  function deleteBooking(bookingId) {
    if (window.confirm("Are you sure you want to delete this booking?"))
      axios
        .delete(`${import.meta.env.VITE_RENDER_API_URL}/bookings/${bookingId}`)
        .then((response) => {
          console.log("Deleted booking:", response.data);
          // Remove the deleted booking from the state
          setBookings(bookings.filter((booking) => booking._id !== bookingId));
          setRefresh(true); // Add this line
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
        });
  }

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const handleBookingFormSubmit = async (bookingData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_RENDER_API_URL}/bookings`,
        bookingData
      );
      if (response.status === 200) {
        // setRefresh(true);
        closeBookingForm();
      } else {
        console.error("Error creating booking:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>

      <Table>
        <TableHeader>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </TableHeader>

        {bookings.map((booking) => (
          <TableRow key={booking.bookingId}>
            <Cabin>{booking.cabins?.name}</Cabin>

            <Stacked>
              <span>{booking.guests?.fullName}</span>
              <span>{booking.guests?.email}</span>
            </Stacked>

            <Stacked>
              <span>
                {new Date(booking.startDate).toDateString() ===
                new Date().toDateString()
                  ? "Today"
                  : `${Math.ceil(
                      (new Date(booking.startDate) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )} days from now`}{" "}
                → {booking.numNights} night stay
              </span>
              <span>
                {new Date(booking.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
                —{" "}
                {new Date(booking.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
            </Stacked>

            <Tag type={statusToTagName[booking.status]}>
              {booking.status.replace("-", " ")}
            </Tag>

            <Amount>{`${booking.totalPrice}`}</Amount>
            <div>
              <Button onClick={() => deleteBooking(booking.bookingId)}>
                Delete
              </Button>
            </div>
          </TableRow>
        ))}
      </Table>
      <div>
        <Pagination count={15} />
      </div>

      <div>
        <ButtonContainer>
          <CreateBookingButton onClick={openBookingForm}>
            Create a new Booking
          </CreateBookingButton>{" "}
        </ButtonContainer>
      </div>
      {isBookingFormOpen && <BookingForm onSubmit={handleBookingFormSubmit} />}
    </>
  );
}

export default Bookings;

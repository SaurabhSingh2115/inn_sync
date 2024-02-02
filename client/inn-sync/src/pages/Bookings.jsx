import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";
import Tag from "../ui/Tag";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
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
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
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

function Bookings() {
  const bookings = [
    {
      id: "1",
      startDate: "2024-02-07",
      endDate: "2024-02-12",
      numNights: 4,
      numGuests: 2,
      totalPrice: 1000,
      status: "checked-in",
      guests: { fullName: "John Doe", email: "john.doe@gmail.com" },
      cabins: { name: "Cabin 1" },
    },
    {
      id: "2",
      startDate: "2024-02-10",
      endDate: "2024-02-15",
      numNights: 5,
      numGuests: 3,
      totalPrice: 1400,
      status: "unconfirmed",
      guests: { fullName: "Jane Smith", email: "jane.smith@gmail.com" },
      cabins: { name: "Cabin 2" },
    },
    {
      id: "3",
      startDate: "2024-02-15",
      endDate: "2024-02-21",
      numNights: 6,
      numGuests: 2,
      totalPrice: 1200,
      status: "checked-in",
      guests: { fullName: "Chris Brown", email: "chris.brown@gmail.com" },
      cabins: { name: "Cabin 3" },
    },
    {
      id: "4",
      startDate: "2024-02-14",
      endDate: "2024-02-16",
      numNights: 2,
      numGuests: 1,
      totalPrice: 700,
      status: "checked-in",
      guests: { fullName: "William", email: "william@gmail.com" },
      cabins: { name: "Cabin 4" },
    },
    {
      id: "5",
      startDate: "2024-02-20",
      endDate: "2024-02-26",
      numNights: 5,
      numGuests: 2,
      totalPrice: 1400,
      status: "unconfirmed",
      guests: { fullName: "Nina", email: "nina@gmail.com" },
      cabins: { name: "Cabin 5" },
    },
    // Add more bookings as needed
  ];

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
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
          <TableRow key={booking.id}>
            <Cabin>{booking.cabins.name}</Cabin>

            <Stacked>
              <span>{booking.guests.fullName}</span>
              <span>{booking.guests.email}</span>
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
            <div></div>
          </TableRow>
        ))}
      </Table>
    </>
  );
}

export default Bookings;

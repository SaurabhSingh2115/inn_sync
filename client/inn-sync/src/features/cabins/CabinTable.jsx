// import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";
import cabinImage1 from "../../data/cabins/cabin-001.jpg";
import cabinImage2 from "../../data/cabins/cabin-002.jpg";
import cabinImage3 from "../../data/cabins/cabin-003.jpg";
import cabinImage4 from "../../data/cabins/cabin-004.jpg";
import cabinImage5 from "../../data/cabins/cabin-005.jpg";
import cabinImage6 from "../../data/cabins/cabin-006.jpg";
import cabinImage7 from "../../data/cabins/cabin-007.jpg";
import cabinImage8 from "../../data/cabins/cabin-008.jpg";
import styled from "styled-components";

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

function CabinTable() {
  // Replace this with your actual data
  const cabins = [
    {
      name: "01",
      maxCapacity: 4,
      regularPrice: 1000,
      discount: 200,
      image: cabinImage1,
    },
    {
      name: "02",
      maxCapacity: 6,
      regularPrice: 1200,
      discount: 300,
      image: cabinImage2,
    },
    {
      name: "03",
      maxCapacity: 2,
      regularPrice: 800,
      discount: 100,
      image: cabinImage3,
    },
    {
      name: "04",
      maxCapacity: 4,
      regularPrice: 1300,
      discount: 300,
      image: cabinImage4,
    },
    {
      name: "05",
      maxCapacity: 5,
      regularPrice: 1400,
      discount: 200,
      image: cabinImage5,
    },
    {
      name: "06",
      maxCapacity: 6,
      regularPrice: 1500,
      discount: 500,
      image: cabinImage6,
    },
    {
      name: "07",
      maxCapacity: 7,
      regularPrice: 2000,
      discount: 700,
      image: cabinImage7,
    },
    {
      name: "08",
      maxCapacity: 8,
      regularPrice: 3000,
      discount: 800,
      image: cabinImage8,
    },

    // add more cabins as needed
  ];

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </TableHeader>
      {cabins.map((cabin, index) => (
        <CabinRow key={index} cabin={cabin} />
      ))}
    </Table>
  );
}

export default CabinTable;

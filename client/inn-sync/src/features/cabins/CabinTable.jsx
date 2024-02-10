// import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CabinRow from "./CabinRow";

// styled components
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

// main component
function Cabins() {
  const [cabins, setCabins] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      axios
        .get(`${import.meta.env.VITE_RENDER_API_URL}/cabins`)
        .then((response) => {
          console.log("Received data:", response.data);
          setCabins(response.data);
          setRefresh(false);
        })
        .catch((error) => {
          console.error("Error fetching cabins:", error);
        });
    }
  }, [refresh]);

  function deleteCabin(cabinName) {
    if (window.confirm("Are you sure you want to delete this cabin?")) {
      axios
        .delete(`${import.meta.env.VITE_RENDER_API_URL}/cabins/${cabinName}`)
        .then((response) => {
          console.log("Deleted cabin:", response.data);
          setCabins((prevCabins) =>
            prevCabins.filter((cabin) => cabin.name !== cabinName)
          );
          setRefresh(false);
        })
        .catch((error) => {
          console.error("Error deleting cabin:", error);
        });
    }
  }

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
        <CabinRow
          key={index}
          cabin={cabin}
          onDelete={() => deleteCabin(cabin.name)}
        />
      ))}
    </Table>
  );
}

export default Cabins;

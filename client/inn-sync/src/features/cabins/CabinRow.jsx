import styled from "styled-components";
import Button from "../../ui/Button";
// import imageUrl from "../data/cabins/cabin-001.jpg";

// import { formatCurrency } from "../../utils/helpers";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Description = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-grey-600);
`;

const CustomButton = styled(Button)`
  padding: 8px 12px; // Adjust as needed
  font-size: 1.4rem; // Adjust as needed
`;

// , description
function CabinRow({ cabin, onDelete }) {
  const { name, maxCapacity, regularPrice, discount, imageUrl } = cabin;

  return (
    <TableRow role="row">
      <Img src={imageUrl} alt="CabinImage" />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{regularPrice}</Price>
      <Discount>{discount}</Discount>
      <CustomButton onClick={onDelete}>Delete</CustomButton>
    </TableRow>
  );
}

export default CabinRow;

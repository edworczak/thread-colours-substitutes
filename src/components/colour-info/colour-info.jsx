import {
  ColourInfoWrapper,
  ColourBrand,
  ColourNumber,
} from "./colour-info.styled";

const ColourInfo = ({ brand, number, accurate }) => {
  if (!number) {
    number = "–";
  }

  return (
    <ColourInfoWrapper>
      <ColourBrand>{brand}</ColourBrand>
      <ColourNumber accurate={accurate}>{number}</ColourNumber>
    </ColourInfoWrapper>
  );
};

export default ColourInfo;

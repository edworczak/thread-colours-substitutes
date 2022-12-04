import {
  ColourInfoWrapper,
  ColourBrand,
  ColourNumber,
} from "./colour-info.styled";

const ColourInfo = ({ brand, number }) => {
  if (!number) {
    number = "–";
  }

  return (
    <ColourInfoWrapper>
      <ColourBrand>{brand}</ColourBrand>
      <ColourNumber>{number}</ColourNumber>
    </ColourInfoWrapper>
  );
};

export default ColourInfo;

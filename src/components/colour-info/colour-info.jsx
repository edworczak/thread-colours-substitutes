import {
  ColourInfoWrapper,
  ColourBrand,
  ColourNumber,
  TextWrapper,
} from "./colour-info.styled";

const ColourInfo = ({ brand, number, accurate }) => {
  if (!number) {
    number = "–";
  }

  let numbers = number.split(" ");

  return (
    <ColourInfoWrapper>
      <TextWrapper>
        <ColourBrand>{brand}</ColourBrand>
      </TextWrapper>
      <TextWrapper>
        {numbers.map((number, index) => {
          return (
            <ColourNumber key={`${number}-${index}`} accurate={accurate}>
              {number}
            </ColourNumber>
          );
        })}
      </TextWrapper>
    </ColourInfoWrapper>
  );
};

export default ColourInfo;

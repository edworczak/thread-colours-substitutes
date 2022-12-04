import { ColourWrapper, ColourImage, ColourInfoWrapper } from "./colour.styled";
import ColourInfo from "../colour-info/colour-info";

const Colour = ({ rgb, dmc, anchor, ariadna }) => {
  return (
    <ColourWrapper data-dmc={dmc} data-anchor={anchor} data-ariadna={ariadna}>
      <ColourImage rgb={rgb} />
      <ColourInfoWrapper>
        <ColourInfo brand={"DMC"} number={dmc} />
        <ColourInfo brand={"An."} number={anchor} />
        <ColourInfo brand={"Ad."} number={ariadna} />
      </ColourInfoWrapper>
    </ColourWrapper>
  );
};

export default Colour;
